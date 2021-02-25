import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/app/service/footer.service';

export interface footerList {
  id: number;
  link: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerList: footerList[] = []
  active: number = 0;
  
  constructor(private service: FooterService, private router: Router) {}
  handleClick(index:number) {
    this.active = index;
  }
  ngOnInit() {
    this.footerList = this.service.getFooterList();
  }
  ngDoCheck() {
    let routeParam:string = this.router.url;
    let activeItem = this.footerList.find(item => routeParam.includes(item.label.toLowerCase()))
    this.active = activeItem?.id ?? 0;
  }
}
