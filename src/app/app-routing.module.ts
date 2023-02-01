import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CatFactComponent } from './catfact/catfact.component';
import { TopHeroesWithTapLoadingComponent } from './top-heroes-with-tap-loading/top-heroes-with-tap-loading.component';
import { TopHeroesWithTapLoading2Component } from './top-heroes-with-tap-loading2/top-heroes-with-tap-loading2.component';
import { TopHeroesWithLoadingPatternComponent } from './top-heroes-with-loading-pattern/top-heroes-with-loading-pattern.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'topheroes', component: TopHeroesWithTapLoadingComponent },
  { path: 'topheroes2', component: TopHeroesWithTapLoading2Component },
  { path: 'topheroes3', component: TopHeroesWithLoadingPatternComponent },
  { path: 'catfact', component: CatFactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
