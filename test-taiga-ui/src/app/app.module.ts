import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TuiProprietaryRootModule} from "@taiga-ui/proprietary-core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiProprietaryRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
