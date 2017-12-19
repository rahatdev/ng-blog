import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';

import { BlogpostService } from './services/blogpost.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: EditComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    BlogpostService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
