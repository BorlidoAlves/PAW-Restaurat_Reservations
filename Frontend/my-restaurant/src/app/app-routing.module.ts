import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ChangeUserComponent } from './change-user/change-user.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ConfRestaurantComponent } from './conf-restaurant/conf-restaurant.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
  {
    path:'register',
    component: RegisterUserComponent
  },
  {
    path:'edit',
    component: EditUserComponent
  },
  {
    path:'changeUser',
    component: ChangeUserComponent
  },
  {
    path:'editPassword',
    component: EditPasswordComponent
  },
  {
    path:'createMenu',
    component: CreateMenuComponent
  },
  {
    path:'listMenus',
    component: ListMenuComponent
  },
  {
    path:'confRest',
    component: ConfRestaurantComponent
  },
  {
    path:'editMenu/:id',
    component: EditMenuComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
