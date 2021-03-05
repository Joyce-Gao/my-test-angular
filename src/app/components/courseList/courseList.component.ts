import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Route } from '@angular/router';
import { CoursesService, Course } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courseList',
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.scss']
})
export class CourseListComponent implements OnInit {
  title: string = "Course List";
  courses!: Course[];
  @ViewChildren('list')
  list!: QueryList<[]>;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor(private courseService: CoursesService) {
   
   }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data.data;
    })
  }
  ngAfterViewInit() {
    console.log(this.list)
  }
  handleCourseItem(course: Course) {
    this.myEvent.emit(course);
  }
}
