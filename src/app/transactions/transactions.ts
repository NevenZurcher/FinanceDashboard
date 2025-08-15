import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {
  transactions = [
    { id: 1, date: '2025-08-10', description: 'Grocery Store', amount: -54.23, account: 'Checking' },
    { id: 2, date: '2025-08-09', description: 'Paycheck', amount: 1500, account: 'Checking' },
    { id: 3, date: '2025-08-07', description: 'Utility Bill', amount: -120.75, account: 'Checking' },
    { id: 4, date: '2025-08-05', description: 'Stock Dividend', amount: 200, account: 'Investment' }
  ];
}
