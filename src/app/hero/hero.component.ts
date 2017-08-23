import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
  constructor(private heroService:HeroService) {}

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero; 
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
