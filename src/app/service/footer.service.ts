import { Injectable } from '@angular/core';
import { footerList } from '../components/footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
footerList: footerList[] = [
  {
    id: 0,
    link : '/home',
    label: 'home'
  },
  {
    id: 1,
    link : '/dashboard',
    label: 'dashboard'
  },
  {
    id: 2,
    link : '/heroes',
    label: 'Heroes'
  },
  {
    id: 3,
    link : '/phones',
    label: 'Phones'
  },
  {
    id: 4,
    link : '/demo-app',
    label: 'Demo App'
  }
];
constructor() { }


getFooterList(): footerList[] {
  return this.footerList;
}

}
