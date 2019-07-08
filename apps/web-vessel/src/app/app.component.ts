import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@vessel/web';

@Component({
  selector: 'vessel-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
