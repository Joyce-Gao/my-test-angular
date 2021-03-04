import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CoursesService, Course } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courseList',
  templateUrl: './courseList.component.html',
  styleUrls: ['./courseList.component.scss']
})
export class CourseListComponent implements OnInit {
  title: string = "Course List";
  courses!: Course[];
  constructor(private courseService: CoursesService) {
   
   }

  ngOnInit() {
  this.courseService.getCourseList().subscribe(data => {
    this.courses = data.data;
  })
  }

}
