import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@org/shared').then((v) => v.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import('@org/features/home').then((v) => v.HomeComponent),
      },
      {
        path: 'tables',
        children: [
          {
            path: '',
            pathMatch: 'prefix',
            loadComponent: () =>
              import('@org/features/home').then((v) => v.HomeComponent),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('@org/features/home').then((v) => v.HomeComponent),
          },
        ],
      },
    ],
  },
];
