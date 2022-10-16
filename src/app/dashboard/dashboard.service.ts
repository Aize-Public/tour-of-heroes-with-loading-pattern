import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  finalize,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoadedValue, WithLoading } from '../withLoading';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _isLoadingHeroes$ = new BehaviorSubject(false);
  isLoadingHeroes$ = this._isLoadingHeroes$.asObservable();
  topHeroesWithOf$: Observable<Hero[]>;
  topHeroesWithLoading$: Observable<LoadedValue<Hero[]>>;
  topHeroesWithMethodCall$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
    this.topHeroesWithMethodCall$ = this.getHeroes();
    
    this.topHeroesWithOf$ = of(void 0).pipe(
      delay(1),
      tap(() => {
        this._isLoadingHeroes$.next(true);
      }),
      switchMap(() => this.heroService.getHeroes()),
      map((heroes) => heroes.slice(1, 5)),
      tap(() => {
        this._isLoadingHeroes$.next(false);
      }),
      finalize(() => {
        this._isLoadingHeroes$.next(false);
      })
    );

    this.topHeroesWithLoading$ = this.heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(1, 5)),
      map(topHeroes => ({
        isLoading: false,
        value: topHeroes
      })),
      startWith({isLoading: true}),
      catchError(error => {
        console.error('!!!ERROR!!!', error);
        return of({ isLoading: false })})
    )
  }

  getHeroes(): Observable<Hero[]> {
    this._isLoadingHeroes$.next(true);
    return this.heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(1, 5)),
      tap(() => this._isLoadingHeroes$.next(false)),
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceWithLoading extends WithLoading {
  topHeroes$: Observable<LoadedValue<Hero[]>>;
  constructor(private heroService: HeroService) {
    super();

    this.topHeroes$ = this.heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(1, 5)),
      map(topHeroes => this.buildReadyValue(topHeroes)),
      this.startWithLoading(),
      this.catchLoadingError()
    )
  }
}
