import { Injectable } from '@angular/core';

export interface Account {
  accountId: string;
  name: string;
  balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://q8fstdvgh2.execute-api.us-east-2.amazonaws.com/dev';

  constructor() {}

  async getAccounts(): Promise<Account[]> {
    const response = await fetch(`${this.apiUrl}/accounts`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : JSON.parse(data.body);
  }

  async addAccount(accountId: string, name: string, balance: number): Promise<void> {
    const response = await fetch(`${this.apiUrl}/accounts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountId, name, balance })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  }
}
