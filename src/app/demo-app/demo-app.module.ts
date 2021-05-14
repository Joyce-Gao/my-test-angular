import { NgModule } from '@angular/core';
import { DemoAppComponent } from './demo-app.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DemoAppComponent]
})
export class DemoAppModule { }
