import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TopHeroesWithTapLoading2Service } from './top-heroes-with-tap-loading2.service';

@Component({
  selector: 'app-top-heroes-with-tap-loading2',
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
providers: [TopHeroesWithTapLoading2Service]
})
export class TopHeroesWithTapLoading2Component implements OnInit, AfterViewChecked {
  constructor(public service: TopHeroesWithTapLoading2Service) { 
  }
  
  ngAfterViewChecked(): void {
    console.log('View checked');
  }
  
  

  ngOnInit(): void {
    this.service.isLoadingHeroes$.subscribe(isLoadingHeroes => console.log('isLoadingHeroes', isLoadingHeroes));
  }

}
