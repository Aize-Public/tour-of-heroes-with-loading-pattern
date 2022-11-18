import { Component } from '@angular/core';
import { TopHeroesDecoratedWithLoadingPatternService } from './top-heroes-decorated-with-loading-pattern.service';
import { TopHeroesWithLoadingPatternService } from './top-heroes-with-loading-pattern.service';

@Component({
  selector: 'app-top-heroes-with-loading-pattern',
  template: `
    <ng-container *ngIf="service.topHeroes$ | async as loadedHeroes">
      <app-spinner *ngIf="loadedHeroes.isLoading"></app-spinner>
      <div class="heroes-menu" *ngIf="loadedHeroes.value as heroes">
        <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}"  class="heroes-menu__item">
          {{ hero.name }}
        </a>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .heroes-menu {
        display: flex;
        justify-content: space-evenly;
        padding: 32px;
      }

      .heroes-menu__item {
        padding: 16px;
        background-color: #3f525c;
        border-radius: 2px;
        padding: 1rem;
        font-size: 1.2rem;
        text-decoration: none;
        display: inline-block;
        color: #fff;
      }
    `,
  ],
  providers: [TopHeroesWithLoadingPatternService, TopHeroesDecoratedWithLoadingPatternService]
})
export class TopHeroesWithLoadingPatternComponent {
  constructor(public service: TopHeroesDecoratedWithLoadingPatternService) {}
}
