import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Injectable()
export class TopHeroesWithTapLoadingService {
  private _isLoadingHeroes$ = new BehaviorSubject(false);
  isLoadingHeroes$ = this._isLoadingHeroes$.asObservable();
  topHeroes$!: Observable<Hero[]>;
  
  constructor(private heroService: HeroService) { 
    this.topHeroes$ = this.getTopHeroes();
  }

  getTopHeroes(): Observable<Hero[]> {
    this._isLoadingHeroes$.next(true);
    
    return this.heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(0, 5)),
      tap(() => this._isLoadingHeroes$.next(false)),
    );
  }
}
