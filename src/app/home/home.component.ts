import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { TestComponent } from '../components/test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'my-app';
  @ViewChild(TestComponent) appTest!: TestComponent;
  @ViewChildren(TestComponent)
  appTestList!: TestComponent;
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
      // console.log(this.appTest, 'aaaa')
      // console.log(this.appTestList, 'bbbb');
  } 

}
