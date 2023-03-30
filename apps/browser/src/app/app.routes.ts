import { Route } from '@angular/router';
import { AppGuard } from './app.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@d-workspace/auth').then(m => m.AuthModule)
  },
  {
    path: '',
    children: [
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
        path: 'd',
        component: DashboardComponent,
        canActivate: [AppGuard],
        children: [
          {
            path: 'welcome',
            loadChildren: () => import('@d-workspace/welcome').then(m => m.WelcomeModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('@d-workspace/calendar').then(m => m.CalendarModule)
          },
          {
            path: 'drive',
            loadChildren: () => import('@d-workspace/drive').then(m => m.DriveModule)
          },
          {
            path: 'wallet',
            loadChildren: () => import('@d-workspace/wallet').then(m => m.WalletModule)
          },
          {
            path: 'notes',
            loadChildren: () => import('@d-workspace/notes').then(m => m.NotesModule)
          },
          {
            path: '',
            redirectTo: 'drive',
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
