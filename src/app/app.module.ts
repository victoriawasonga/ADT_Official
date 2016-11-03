import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,

    routing,

    SmartadminModule.forRoot(),
    UserModule.forRoot()
  ],
  providers: [UserService],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

}
