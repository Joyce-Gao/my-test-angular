import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { SharedModule } from '../shared/shared/shared.module';
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [GreetingComponent],
  exports: [GreetingComponent]
})
export class GreetingModule { }
