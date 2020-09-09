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
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { ListMenuUserComponent } from './list-menu-user/list-menu-user.component';

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
  },
  {
    path:'createReservation',
    component: CreateReservationComponent
  },
  {
    path:'listReservation',
    component: ListReservationComponent
  },
  {
    path:'listUsers',
    component:ListUsersComponent
  },
  {
    path:'listReservations',
    component: ListReservationsComponent
  },
  {
    path:'editStatus/:id',
    component: EditStatusComponent
  },
  {
    path:'listMenusUser',
    component: ListMenuUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
