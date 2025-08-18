import { Component, OnInit } from '@angular/core';
import { AccountService, Account } from '../services/account.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  accounts: Account[] = [];
  showBalances = true;

  constructor(private accountService: AccountService) {}

  accountIdInput = '';
  nameInput = '';
  balanceInput: number | null = null;

  ngOnInit() {
    this.fetchAccounts();
  }

  async fetchAccounts(){
    try {
      this.accounts = await this.accountService.getAccounts();
    } catch (err) {
      console.error('Error fetching accounts:', err);
    }
  }

  async addAccount(accountIdInput: HTMLInputElement, nameInput: HTMLInputElement, balanceInput: HTMLInputElement) {
  try {
    await this.accountService.addAccount(
        accountIdInput.value,
        nameInput.value,
        Number(balanceInput.value)
      );
    
    await this.fetchAccounts();

    // Clear inputs
    accountIdInput.value = '';
    nameInput.value = '';
    balanceInput.value = '';
  } catch (err) {
    console.error("Error adding account:", err);
  }
}

  toggleBalances() {
    this.showBalances = !this.showBalances;
  }
}
