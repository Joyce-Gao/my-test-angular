import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CourseItem } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courseItem',
  templateUrl: './courseItem.component.html',
  styleUrls: ['./courseItem.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input()
  item!: CourseItem;
  isShow: boolean = false;
  @ViewChild('courseItem')
  courseItem!: ElementRef;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    // console.log(this.item)
  }
  clickCourseItem() {
    const checkboxEle = this.courseItem.nativeElement.querySelector('.course-checkbox');
    if(checkboxEle.checked){
      checkboxEle.checked = false;
      this.isShow = false;
    }else{
      checkboxEle.checked = true;
      this.isShow = true;
    }
  }
  test(value: string): void {
    console.log(value, 1111)
  }
}
