import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PhoneDetailComponent } from '../components/phone-detail/phone-detail.component';
import { OrderbyPipe } from '../core/orderby.pipe';
import { FilterPipe } from '../core/filter.pipe'
import { PhonesComponent } from './phones.component';
import { CheckmarkPipe } from '../core/checkmark.pipe';
import { PhonesRoutes } from './phones-route.module';

@NgModule({
  imports: [
    SharedModule,
    PhonesRoutes
  ],
  declarations: [PhonesComponent, PhoneDetailComponent, OrderbyPipe, FilterPipe, CheckmarkPipe],
  exports: [PhonesComponent]
})
export class PhonesModule { }