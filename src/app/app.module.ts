import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { DisableControlModule } from './shared/directives/Disable-control/disable-control.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
