import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from '../components/detail/detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: 'detail', component: DashboardComponent},
  {path: 'detail/:id', component: DetailComponent},
];

export const DashboardRoutes = RouterModule.forChild(routes);
