import { Component } from '@angular/core';
import { DashboardService, DashboardServiceWithLoading } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public service: DashboardServiceWithLoading) {}
}
