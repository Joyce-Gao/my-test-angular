import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
