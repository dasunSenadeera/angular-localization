import { Component } from '@angular/core';
import { LAN_CONFIG } from './localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = LAN_CONFIG['NAME'];
}
