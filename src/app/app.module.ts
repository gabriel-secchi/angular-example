import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FormsComponent } from './forms/forms.component'
import { ApiConnectComponent } from './api-connect/api-connect.component'

import { GithubLoginService } from './github-api/github-login.service';
import { GithubUserComponent } from './github-api/github-user/github-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormsComponent,
    ApiConnectComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GithubLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
