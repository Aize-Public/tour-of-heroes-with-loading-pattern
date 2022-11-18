import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { SpinnerComponent } from './spinner.component';
import { CatfactComponent } from './catfact/catfact.component';
import { TopHeroesWithTapLoadingComponent } from './top-heroes-with-tap-loading/top-heroes-with-tap-loading.component';
import { TopHeroesWithTapLoading2Component } from './top-heroes-with-tap-loading2/top-heroes-with-tap-loading2.component';
import { TopHeroesWithLoadingPatternComponent } from './top-heroes-with-loading-pattern/top-heroes-with-loading-pattern.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    SpinnerComponent,
    CatfactComponent,
    TopHeroesWithTapLoadingComponent,
    TopHeroesWithTapLoading2Component,
    TopHeroesWithLoadingPatternComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
