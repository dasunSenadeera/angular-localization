import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
/**
 * Declaration of config class
 */
export class LanConfig
{
//Your properties here
  readonly apiEndpoint: string;
}

/**
 * Global variable containing actual config to use. Initialised via ajax call
 */
export let LAN_CONFIG: LanConfig;

/**
 * Service in charge of dynamically initialising configuration
 */



@Injectable()
export class LocalizationService {

  constructor(private http: HttpClient)
  {
  }

  public load()
  {
    return new Promise((resolve, reject) => {

      this.http.get(window['config'].LOCALIZATION_SOURCE).catch((error: any): any => {

        reject(true);
        return Observable.throw('Server error');
      }).subscribe((envResponse :any) => {
        let t = new LanConfig();
        //Modify envResponse here if needed (e.g. to ajust parameters for https,...)
        LAN_CONFIG = Object.assign(t, envResponse);
        resolve(true);
      });

    });
  }

}
