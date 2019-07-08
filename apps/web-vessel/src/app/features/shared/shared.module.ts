import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@vessel/web';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
