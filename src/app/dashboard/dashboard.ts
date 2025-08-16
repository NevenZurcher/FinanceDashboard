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
  apiUrl = 'https://q8fstdvgh2.execute-api.us-east-2.amazonaws.com/dev';

  accountIdInput = '';
  nameInput = '';
  balanceInput: number | null = null;

  ngOnInit() {
    this.fetchAccounts();
  }

  async fetchAccounts(){
    try {
      const response = await fetch(`${this.apiUrl}/accounts`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();

      this.accounts = Array.isArray(data) ? data: JSON.parse(data.body);

    } catch (err) {
      console.error('Error fetching accounts:', err);
    }
  }

  async addAccount(accountIdInput: HTMLInputElement, nameInput: HTMLInputElement, balanceInput: HTMLInputElement) {
  try {
    const accountId = accountIdInput.value;
    const name = nameInput.value;
    const balance = Number(balanceInput.value);

    const response = await fetch(`${this.apiUrl}/accounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountId, name, balance })
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    await this.fetchAccounts();

    // Clear inputs
    accountIdInput.value = '';
    nameInput.value = '';
    balanceInput.value = '';
  } catch (err) {
    console.error("Error adding account:", err);
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
