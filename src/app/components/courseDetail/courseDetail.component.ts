import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail, CoursesService } from 'src/app/service/courses.service';
import { ChildComponent } from '../child/child.component';
import { CourseItemComponent } from '../courseItem/courseItem.component';

@Component({
  selector: 'app-courseDetail',
  templateUrl: './courseDetail.component.html',
  styleUrls: ['./courseDetail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseDetail!: CourseDetail;
  list!: any[];
  @ViewChild('test') test: any;
  @ViewChildren(CourseItemComponent) detail!: any;
  constructor(private route: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get('courseUrl') ?? '';
    this.courseService.getCourse(courseUrl).subscribe(data => {
      this.courseDetail = data;
      this.list = data.lessons;
    })
  }
  ngAfterViewInit() {
    console.log(this.detail);
    // console.log(this.test.nativeElement.firstElementChild, 'tttt')
  }
  
  testClick(): void {
    console.log(this.detail._results[0].isShow, 'test');
    this.detail._results[0].test('haole');
  }
}
