import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../service/heroes.service';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private route: Router, private service: HeroesService) { }

  ngOnInit(): void {
   this.heroes = this.service.getHeroes().slice(1, 5);
  }
  handleClick(index: number): void {
    this.route.navigate([`/detail/${index}`]);
  }

}
