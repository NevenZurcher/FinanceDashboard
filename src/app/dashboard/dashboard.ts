import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  accounts = [
    { name: 'Checking', balance: 1200 },
    { name: 'Savings', balance: 5400 },
    { name: 'Investments', balance: 15000 }
  ]

  recentTransactions = [
    { date: '2025-08-10', description: 'Grocery Store', amount: -54.23 },
    { date: '2025-08-09', description: 'Paycheck', amount: 1500 },
    { date: '2025-08-07', description: 'Utility Bill', amount: -120.75 }
  ];

  showBalances = true;
  
  toggleBalances() {
    this.showBalances = !this.showBalances;
  }
}
