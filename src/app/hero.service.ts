import { Hero } from './Hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHereos(): Hero[] {
        return HEROES
    }
}