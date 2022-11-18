import { Injectable } from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Injectable()
export class DashboardService {
  topHeroes$: Observable<Hero[]>;

  constructor(heroService: HeroService) {
    this.topHeroes$ = heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(1, 5)),
    )
  }
}