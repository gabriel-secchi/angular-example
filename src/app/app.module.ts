import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApplicationErrorHandler } from './app.error-handler';
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FormsComponent } from './forms/forms.component'
import { ApiConnectComponent } from './api-connect/api-connect.component'
import { GithubUserComponent } from './github-api/github-user/github-user.component'
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { GithubLoginService } from './github-api/github-login.service';
import { NotificationService } from './messages/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormsComponent,
    ApiConnectComponent,
    GithubUserComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    SnackbarComponent
  ],
  providers: [
    GithubLoginService,
    NotificationService,
    {provide: ErrorHandler, useClass: ApplicationErrorHandler}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
