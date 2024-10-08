import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {  RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<app-admin-dashboard></app-admin-dashboard>',
})
export class AppComponent { }