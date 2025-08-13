import { Component} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [NgFor]
})
export class App {
  title = 'Finance Dashboard';
  accounts = [
    { name: 'Checking', balance: 1200 },
    { name: 'Savings', balance: 5400}
  ];
}
