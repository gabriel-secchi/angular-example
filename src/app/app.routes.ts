import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FormsComponent } from './forms/forms.component'
import { ApiConnectComponent } from './api-connect/api-connect.component'

export const ROUTES:  Routes = [
  {path: '', component: HomeComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'api-connect', component: ApiConnectComponent},
]
