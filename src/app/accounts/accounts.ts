import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css'
})
export class Accounts {
  accounts = [
      { id: 1, name: 'Checking', balance: 1200, type: 'Bank' },
      { id: 2, name: 'Savings', balance: 5400, type: 'Bank' },
      { id: 3, name: 'Investment', balance: 15000, type: 'Stocks' }
    ];
}
