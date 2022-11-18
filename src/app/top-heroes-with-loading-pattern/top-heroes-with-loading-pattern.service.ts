import { Injectable } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

export type LoadedValue<T> = {
  isLoading: boolean;
  value?: T;
};

@Injectable()
export class TopHeroesWithLoadingPatternService {
  topHeroes$: Observable<LoadedValue<Hero[]>>;

  constructor(heroService: HeroService) { 
    this.topHeroes$ = heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(0, 5)),
      map(topHeroes => ({
        isLoading: false,
        value: topHeroes
      })),
      startWith({isLoading: true}),
    )
  }
}
