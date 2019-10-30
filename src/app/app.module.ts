import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LocalizationService} from './localization/localization.service';
import {loadLanguageService} from './localization/localization.module';

@NgModule({
  declarations: [
    AppComponent,HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  LocalizationService,
    { provide: APP_INITIALIZER, useFactory: loadLanguageService , deps: [HttpClient,LocalizationService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
