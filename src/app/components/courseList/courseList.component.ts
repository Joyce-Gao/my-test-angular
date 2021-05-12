import { AfterViewInit, Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Route } from '@angular/router';
import { CoursesService, Course } from 'src/app/service/courses.service';

@Component({
  // selector: 'app-course-list'
  selector: 'app-courseList',
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {
  title = 'Course List';
  courses!: Course[];
  @ViewChildren('list')
  list!: QueryList<[]>;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor(private courseService: CoursesService) {

   }

  ngOnInit(): void {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data.data;
    });
  }
  ngAfterViewInit(): void {
    console.log(this.list);
  }
  handleCourseItem(course: Course): void {
    this.myEvent.emit(course);
  }
}
