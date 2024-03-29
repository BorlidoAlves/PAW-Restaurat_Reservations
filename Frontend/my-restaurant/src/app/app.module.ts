import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ChangeUserComponent } from './change-user/change-user.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ConfRestaurantComponent } from './conf-restaurant/conf-restaurant.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { ListMenuUserComponent } from './list-menu-user/list-menu-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    RegisterUserComponent,
    EditUserComponent,
    ChangeUserComponent,
    EditPasswordComponent,
    CreateMenuComponent,
    ListMenuComponent,
    ConfRestaurantComponent,
    EditMenuComponent,
    DashboardComponent,
    CreateReservationComponent,
    ListReservationComponent,
    ListUsersComponent,
    ListReservationsComponent,
    EditStatusComponent,
    ListMenuUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
