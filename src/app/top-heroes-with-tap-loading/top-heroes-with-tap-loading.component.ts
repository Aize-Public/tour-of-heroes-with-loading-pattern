import { Component } from '@angular/core';
import { TopHeroesWithTapLoadingService } from './top-heroes-with-tap-loading.service';

@Component({
  selector: 'app-top-heroes-with-tap-loading',
  template: `
    <app-spinner *ngIf="service.isLoadingHeroes$ | async"></app-spinner>
    <div class="heroes-menu" *ngIf="service.topHeroes$ | async as heroes">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}" class="heroes-menu__item">
        {{ hero.name }}
      </a>
    </div>
  `,
  styles: [`
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
  `],
  providers: [TopHeroesWithTapLoadingService]
})
export class TopHeroesWithTapLoadingComponent {
  constructor(public service: TopHeroesWithTapLoadingService) {}
}
