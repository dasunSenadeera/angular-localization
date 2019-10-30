import { NgModule,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationService } from './localization.service';

/**
 * Exported function so that it works with AOT
 * @param {LocalizationService} localizationService
 * @returns {Function}
 */
export function loadlocalizationService(localizationService:LocalizationService ): Function
{
  return () => { return localizationService.load() };
}


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class LocalizationModule { }
