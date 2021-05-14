import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CourseListComponent } from '../components/courseList/courseList.component';
import { TestComponent } from '../components/test/test.component';
import { Course } from '../service/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'my-app';
  @ViewChild(TestComponent) appTest!: TestComponent;
  @ViewChild(CourseListComponent)
  courseList!: CourseListComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      // console.log(this.appTest, 'aaaa')
      // console.log(this.courseList);
  }
  courseItemClick(course: Course): void {
    // const isContinue: boolean = confirm(`You clicked ${course.description}, Do you want to continue?`);
    // if(isContinue) {
    //   alert('sure to continue')
    // }else {
    //   alert('canceled')
    // }
    console.log(course);
  }

}
