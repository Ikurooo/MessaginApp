// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./component/sign-in/sign-in.component";
import {SignupComponent} from "./component/sign-up/sign-up.component";

const routes: Routes = [
  { path: '', redirectTo: 'messaging', pathMatch: 'full' },
  {
    path: 'messaging', children: [
      { path: '', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
    ]
  },
  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
