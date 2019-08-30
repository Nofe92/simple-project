import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [UserDetailsComponent, UserListComponent, UserViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class UserModule { }
