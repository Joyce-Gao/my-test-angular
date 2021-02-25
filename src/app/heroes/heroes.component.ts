import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../dashboard/dashboard.component';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private service: HeroesService, private route: Router) {
    this.heroes = this.service.getHeroes();
   }

  ngOnInit() {
   
  }
  handleClick(index: number) {
    this.route.navigate([`/detail/${index}`]);
  }

}
