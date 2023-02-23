import { Route } from '@angular/router';
import { NotesPageComponent } from './containers/notes-page/notes-page.component';

export const notesRoutes: Route[] = [
  {
    path: '', 
    children: [
      {
        path: '',
        component: NotesPageComponent
      }
    ]
  }
];
