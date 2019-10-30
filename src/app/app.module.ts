import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LocalizationService} from './localization/localization.service';
import {loadlocalizationService, LocalizationModule} from './localization/localization.module';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocalizationModule 
  ],
  providers: [  LocalizationService,
    { provide: APP_INITIALIZER, useFactory: loadlocalizationService , deps: [LocalizationService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
