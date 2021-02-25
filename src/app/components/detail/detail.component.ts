import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common'
import { Hero } from 'src/app/dashboard/dashboard.component';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  hero!: Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroesService, private location: Location) {
  
  }
  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroService.getHero(id) as Hero;
  }
  goBack(): void {
    this.location.back();
  }
}
