import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './common-ui/header/header';
import { Counter } from './common-ui/counter/counter';
import { ToDo } from './common-ui/to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Counter, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
