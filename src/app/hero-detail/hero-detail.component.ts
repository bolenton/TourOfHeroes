import { Hero } from '../Hero';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent { 
    @Input() hero: Hero;
}