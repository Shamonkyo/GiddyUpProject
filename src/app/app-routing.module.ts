import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UserdashComponent} from './userdash/userdash.component';
import {HomepageComponent} from './welcome/homepage/homepage.component';

const routes: Routes = [{
  path: 'profile',
  component: UserdashComponent
},
  {
    path: 'login',
    component: AuthComponent
  },
  { path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
