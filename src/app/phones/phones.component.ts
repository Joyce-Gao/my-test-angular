import { Component, Input, OnInit } from '@angular/core';
import { PhonesService, Phones } from '../service/phones.service'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  title: string = 'Phones List'
  phones!: Phones[];
  orderProp: string = 'age';
  query:string ='';
  constructor(private service: PhonesService) {
    this.service.getPhones().subscribe(data => {
      this.phones = data;
    });
  }
  onChange(eleValue: string){
    this.orderProp = eleValue;
  }
  onQuery(event: KeyboardEvent){
    this.query = (event.target as HTMLInputElement).value;
  }
  ngOnInit() {
  }

}
