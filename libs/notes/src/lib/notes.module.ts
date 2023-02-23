import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@d-workspace/ui';
import { notesRoutes } from './lib.routes';
import { NotesPageComponent } from './containers/notes-page/notes-page.component';
import { NotesService } from './services/notes.service';
import { NoteModalComponent } from './components/note-modal/note-modal.component';


@NgModule({
  declarations: [
    NotesPageComponent,
    NoteModalComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(notesRoutes),
    IonicModule,
    ReactiveFormsModule,
    UiModule,
  ],
  providers: [
    NotesService
  ],
})
export class NotesModule {}
