import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catfact',
  template: `
    <div style="height: 200px; padding: 50px">
      <app-spinner *ngIf="isLoadingCatFact"></app-spinner>
      <span *ngIf="!isLoadingCatFact && catFact">{{ catFact }}</span>
    </div>
  `,
})
export class CatfactComponent implements OnInit {
  isLoadingCatFact = false;
  catFact?: string;

  constructor() {}

  ngOnInit(): void {
    this.fetchCatFacts();
  }

  async fetchCatFacts() {
    let timeout;

    clearTimeout(timeout);
    this.isLoadingCatFact = true;

    timeout = setTimeout(async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();

      this.isLoadingCatFact = false;
      this.catFact = data.fact;
    }, 1000);
  }
}
