import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner-container"><div class="spinner"></div></div>`,
  styles: [
    `
      .spinner-container {
        padding: 32px 0;
      }
      .spinner {
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #3498db;
        width: 80px;
        height: 80px;
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
export class SpinnerComponent {
}