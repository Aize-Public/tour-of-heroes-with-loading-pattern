import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner"></div>`,
  styles: [
    `
      .spinner {
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #3498db;
        width: 80px;
        height: 80px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        margin: auto;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}