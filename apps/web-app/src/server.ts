import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();

// TODO (producción): Configurar `NG_ALLOWED_HOSTS` en las variables de entorno
// del servidor con el dominio real, ej: NG_ALLOWED_HOSTS=tudominio.com
// Esto previene ataques SSRF. Nunca dejar localhost en producción.
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

//* Utilizamos los app.use primero como middlware que realizan
//* logica antes de entrar a las peticiones finales de la aplicacion.

// * Middleware logger para el servidor.
app.use((req, res, next) => {
  // Solo queremos loggear peticiones a rutas de la app, no archivos estáticos como .js, .css o imágenes
  if (req.originalUrl.includes('.') && !req.originalUrl.includes('.html')) {
    return next();
  }

  const start = Date.now();
  console.log(`🚀 [Iniciando SSR] Solicitud entrante para: ${req.originalUrl}`);

  // res.on('finish') es un evento de Express que se dispara cuando
  // la respuesta (el HTML final) ya se envió al cliente
  res.on('finish', () => {
    const duration = Date.now() - start;

    // Si el status es 200 o 304, fue un éxito. Si es 400+, hubo un error.
    if (res.statusCode >= 200 && res.statusCode < 400) {
      console.log(
        `✅ [Éxito SSR] Ruta: ${req.originalUrl} | Estado: ${res.statusCode} | Tiempo: ${duration}ms`,
      );
    } else {
      console.error(
        `❌ [Error SSR] Ruta: ${req.originalUrl} | Estado: ${res.statusCode} | Tiempo: ${duration}ms`,
      );
    }
  });
  // Siempre debes llamar a next() para que la petición siga su camino hacia Angular.
  next();
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  // TODO (producción/qa): El PORT debe venir de la variable de entorno del servidor
  // de despliegue (Railway, Render, AWS, etc). No hardcodear 4000 en producción.
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
