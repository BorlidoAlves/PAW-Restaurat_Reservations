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
import { UserGuardService } from './user-guard.service';
import { AdminGuardService } from './admin-guard.service';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'homepage',
    component: HomepageComponent,
    
  },
  {
    path:'register',
    component: RegisterUserComponent
  },
  {
    path:'edit',
    component: EditUserComponent,
    canActivate: [UserGuardService]
  },
  {
    path:'changeUser',
    component: ChangeUserComponent,
    canActivate: [UserGuardService]
  },
  {
    path:'editPassword',
    component: EditPasswordComponent,
    canActivate: [UserGuardService]
  },
  {
    path:'createMenu',
    component: CreateMenuComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'listMenus',
    component: ListMenuComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'confRest',
    component: ConfRestaurantComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'editMenu/:id',
    component: EditMenuComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'createReservation',
    component: CreateReservationComponent,
    canActivate: [UserGuardService]
  },
  {
    path:'listReservation',
    component: ListReservationComponent,
    canActivate: [UserGuardService]
  },
  {
    path:'listUsers',
    component:ListUsersComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'listReservations',
    component: ListReservationsComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'editStatus/:id',
    component: EditStatusComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'listMenusUser',
    component: ListMenuUserComponent,
    canActivate: [UserGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
