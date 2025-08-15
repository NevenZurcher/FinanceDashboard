import { Component, OnInit } from '@angular/core';

interface Account {
  accountId: string;
  name: string;
  balance: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  accounts: Account[] = [];
  apiUrl = 'https://q8fstdvgh2.execute-api.us-east-2.amazonaws.com/dev/accounts';

  ngOnInit() {
    this.fetchAccounts();
  }

  async fetchAccounts(){
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();

      this.accounts = Array.isArray(data) ? data: JSON.parse(data.body);
      
    } catch (err) {
      console.error('Error fetching accounts:', err);
    }
  }


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
