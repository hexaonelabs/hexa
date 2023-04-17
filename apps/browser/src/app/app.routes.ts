import { Route } from '@angular/router';
import { AppGuard } from './app.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('@hexa/auth').then(m => m.AuthModule)
      },
      {
        path: 'ipfs',
        // loadComponent: () => import('./components/ipfs/ipfs.component').then(m => m.IpfsComponent),
        children: [
          {
            path: ':cid',
            loadComponent: () => import('./components/ipfs/ipfs.component').then(m => m.IpfsComponent),

          }
        ]
      },
      {
        path: 'h',
        component: DashboardComponent,
        canActivate: [AppGuard],
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('@hexa/welcome').then(m => m.WelcomeModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('@hexa/calendar').then(m => m.CalendarModule)
          },
          {
            path: 'drive',
            loadChildren: () => import('@hexa/drive').then(m => m.DriveModule)
          },
          {
            path: 'wallet',
            loadChildren: () => import('@hexa/wallet').then(m => m.WalletModule)
          },
          {
            path: 'notes',
            loadChildren: () => import('@hexa/notes').then(m => m.NotesModule)
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ]
  },
];
