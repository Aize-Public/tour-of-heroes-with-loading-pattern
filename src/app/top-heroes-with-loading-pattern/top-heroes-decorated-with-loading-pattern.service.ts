import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoadedValue, WithLoading } from '../withLoading';

@Injectable()
export class TopHeroesDecoratedWithLoadingPatternService extends WithLoading {
  topHeroes$: Observable<LoadedValue<Hero[]>>;
  
  
  constructor(heroService: HeroService) {
    super();

    this.topHeroes$ = heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(0, 5)),
      map(topHeroes => this.buildReadyValue(topHeroes)),
      this.startWithLoading(),
      this.catchLoadingError()
    )
  }
}
