import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail, CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courseDetail',
  templateUrl: './courseDetail.component.html',
  styleUrls: ['./courseDetail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseDetail!: CourseDetail;
  list!: any[];
  constructor(private route: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get('courseUrl') ?? '';
    this.courseService.getCourse(courseUrl).subscribe(data => {
      this.courseDetail = data;
      this.list = data.lessons;
    })
  }

}
