import { NgModule,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';

/**
 * Exported function so that it works with AOT
 * @param {LanguageService} configService
 * @returns {Function}
 */
export function loadLanguageService(languageService: LanguageService): Function

{
  return () => { return languageService.load() };
}


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LanguageService,{ provide: APP_INITIALIZER, useFactory: loadLanguageService , deps: [LanguageService], multi: true }]
})
export class LocalizationModule { }
