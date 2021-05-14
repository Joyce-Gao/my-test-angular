import { Component, DoCheck, OnInit } from '@angular/core';
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
export class FooterComponent implements OnInit, DoCheck {
  footerList: footerList[] = [];
  active = 0;

  constructor(private service: FooterService, private router: Router) {}
  handleClick(index: number): void {
    this.active = index;
  }
  ngOnInit(): void {
    this.footerList = this.service.getFooterList();
  }
  ngDoCheck(): void {
    const routeParam: string = this.router.url;
    const activeItem = this.footerList.find(item => routeParam.includes(item.label.toLowerCase()))
    this.active = activeItem?.id ?? 0;
  }
}
