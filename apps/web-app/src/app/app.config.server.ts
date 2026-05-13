import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    // TODO (producción): Agregar aquí providers exclusivos del servidor:
    // - Interceptores HTTP para auth server-side
    // - Servicios de logging/monitoreo (Datadog, Sentry SSR, etc.)
    // - Cache providers si usas Redis u otro mecanismo server-side
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
