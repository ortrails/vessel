import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@vessel/core';
import { AppService } from '@vessel/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
