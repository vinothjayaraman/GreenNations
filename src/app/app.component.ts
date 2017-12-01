import { Component } from '@angular/core';
import {FrameworkConfigService, FrameworkConfigSettings} from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigServices: FrameworkConfigService) {
    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/facebook.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/tumblr.png', alt:'twitter', link:'http://www.twitter.com'},
        {imageFile: 'assets/google-plus.png', alt:'Google Plus', link:'http://plus.google.com'}
      ],
      showLanguageSelector: false,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigServices.configure(config);

  }
}
