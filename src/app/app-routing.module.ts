import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './components/courseDetail/courseDetail.component';
import { DetailComponent } from './components/detail/detail.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  {path :'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail', component: DashboardComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'phones/:phoneId', component: PhoneDetailComponent},
  {path: 'course/:courseUrl', component: CourseDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
