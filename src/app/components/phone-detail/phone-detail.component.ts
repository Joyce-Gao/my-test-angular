import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhonesService, PhoneType } from 'src/app/service/phones.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {
  phone!: PhoneType;
  
mainImageUrl: string = '';
mainImageId: number  = 0;
  constructor(private service: PhonesService, private route: ActivatedRoute) {
    let phoneId:string = this.route.snapshot.paramMap.get('phoneId') || '';
    this.service.getHero(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(this.phone.images[0], 0)
    });
  }

  ngOnInit() {
  }
  setImage(imageUrl: string, number: number) {
    this.mainImageUrl = imageUrl;
    this.mainImageId = number;
  }

}
