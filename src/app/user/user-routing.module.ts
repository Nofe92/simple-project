import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'view',
    component: UserViewComponent,
  },
  {
   path: 'list',
   component: UserListComponent,
  },
  {
    path: ':id/details',
    component: UserDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
