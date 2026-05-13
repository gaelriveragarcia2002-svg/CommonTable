import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // TODO: Cualquier ruta con parámetros dinámicos (:id, :slug, etc.)
  // debe usar RenderMode.Server para que Angular no intente pre-renderizarla
  // en build time sin conocer los valores posibles.
  // Si los valores son conocidos y finitos, puedes usar RenderMode.Prerender
  // y definir getPrerenderParams() que retorne todos los IDs posibles.
  {
    path: 'tables/:id',
    renderMode: RenderMode.Server,
  },

  // TODO (producción/qa): Evalúa si todas las rutas restantes deben ser Prerender.
  // - RenderMode.Prerender → genera HTML estático en build (más rápido, ideal para rutas públicas/estáticas)
  // - RenderMode.Server    → renderiza en cada petición (necesario si el contenido cambia frecuentemente)
  // - RenderMode.Client    → deshabilita SSR para esa ruta (CSR puro, útil para dashboards privados)
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
