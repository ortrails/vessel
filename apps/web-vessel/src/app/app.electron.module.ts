import { NgModule } from '@angular/core';
import { VesselElectronCoreModule } from '@vessel/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, VesselElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
