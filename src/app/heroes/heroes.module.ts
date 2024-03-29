import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DetailComponent } from '../components/detail/detail.component';
import { HeroesRouteRoutes } from './heroes-route.module';

@NgModule({
  imports: [
    SharedModule,
    HeroesRouteRoutes
  ],
  declarations: [HeroesComponent, DetailComponent],
  exports: [HeroesComponent]
})
export class HeroesModule { }
