import { HeroService } from './hero.service';
import { Component } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private heroService:HeroService) {

  }

  title: string = 'Tour Of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero): void {
    this.selectedHero = hero; 
  }
}
