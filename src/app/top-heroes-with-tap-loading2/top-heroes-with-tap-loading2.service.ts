import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of, switchMap, tap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Injectable({providedIn: 'root'})
export class TopHeroesWithTapLoading2Service {
  private _isLoadingHeroes$ = new BehaviorSubject(false);
  isLoadingHeroes$ = this._isLoadingHeroes$.asObservable();
  topHeroes$: Observable<Hero[]>;
  
  constructor(private heroService: HeroService) { 
    this.topHeroes$ = of(undefined).pipe(
      delay(0),
      tap(() => {
        this._isLoadingHeroes$.next(true);
      }),
      switchMap(() => this.heroService.getHeroes()),
      map((heroes) => heroes.slice(1, 5)),
      tap(() => {
        this._isLoadingHeroes$.next(false);
      })
    );
  }
}
