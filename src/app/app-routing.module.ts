import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './components/courseDetail/courseDetail.component';
import { DetailComponent } from './components/detail/detail.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // component: HomeComponent
    loadChildren: () =>
      import('./home/home.module').then((home) => home.HomeModule),
  },
  {
    path: 'heroes',
    // component: HeroesComponent
    loadChildren: () =>
      import('./heroes/heroes.module').then((heroes) => heroes.HeroesModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // loadChildren: () => import('./dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)
  },
  {
    path: 'detail',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'phones',
    // component: PhonesComponent
    loadChildren: () =>
      import('./phones/phones.module').then((phones) => phones.PhonesModule),
  },
  { path: 'phones/:phoneId', component: PhoneDetailComponent },
  { path: 'course/:courseUrl', component: CourseDetailComponent },
  { path: 'demo-app', component: DemoAppComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
