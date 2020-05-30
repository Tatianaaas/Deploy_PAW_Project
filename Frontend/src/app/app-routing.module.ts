import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TestAddComponent } from './test-add/test-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { LoginComponent } from './login/login.component';
import { TestDateComponent } from './test-date/test-date.component';
import { TestResultComponent } from './test-result/test-result.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user/show/:userId',
    component: UserDetailComponent,
    data: { title: 'User Details' }/* ,
    canActivate: [AuthGuardService] */
   },
   {
      path: 'signup',
      component: UserAddComponent,
      data: { title: 'Add User' }
   },
   {
      path: 'technic/update/:userId',
      component: UserEditComponent,
      data: { title: 'Edit User' }/* ,
      canActivate: [AuthGuardService] */
    },
    {
      path: 'user/ordertest/:userId',
      component: TestAddComponent,
      data: { title: 'Create Test'}
    },
    {
      path: 'admin/updatepass/:userId',
      component: AdminEditComponent,
      data: { title: 'Edit Password'}
    },
    {
      path: 'admin/update/:userId',
      component: UserEditComponent,
      data: { title: 'Edit User By Admin'}
    },
    {
      path: 'technic/scheduleTest/:userId',
      component: TestDateComponent,
      data: { title: 'Schedule First Test' }
    },
    {
      path: 'technic/results/firstTest/:userId',
      component: TestResultComponent,
      data: { title: 'Update Test Results' }
    },
    {
      path: 'technic/results/secondTest/:userId',
      component: TestResultComponent,
      data: { title: 'Update Test Results' }
    },
    {
      path: 'admin/tests',
      component: TestListComponent,
      data: { title: 'List of Tests' }
    },
    {
        path: 'login', component: LoginComponent
    }, // default redirect to home
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
