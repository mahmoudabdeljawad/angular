import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LinkModule } from './link/link.module';
import { UsersComponent } from './users/users.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DaialogComponent } from './daialog/daialog.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
@NgModule({
  declarations: [
    AppComponent,
    EditUsersComponent,
  ],
  imports: [
    LinkModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
