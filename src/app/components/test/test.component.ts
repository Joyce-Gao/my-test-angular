import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  name: string = 'Semlinker';
  @ViewChild('greet')
  greetDiv!: ElementRef;
  constructor() {
   
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // console.dir(this.greetDiv);
  }

}
