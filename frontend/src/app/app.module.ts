  import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
  import {SigninComponent} from "./component/sign-in/sign-in.component";
  import {SignupComponent} from "./component/sign-up/sign-up.component";

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        SignupComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    // Needed for Toastr
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
