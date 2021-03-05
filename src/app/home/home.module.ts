import { NgModule } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CourseListComponent } from '../components/courseList/courseList.component';
import { TestComponent } from '../components/test/test.component';
import { GreetingComponent } from '../greeting/greeting.component';
import { SharedModule } from '../shared/shared/shared.module';
import { HomeComponent } from './home.component';
import { CourseDetailComponent } from '../components/courseDetail/courseDetail.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, CarouselComponent, GreetingComponent, TestComponent, CourseListComponent, CourseDetailComponent],
  exports: [HomeComponent]
})
export class HomeModule { }