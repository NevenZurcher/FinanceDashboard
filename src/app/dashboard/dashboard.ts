import { Component, OnInit } from '@angular/core';
import { AccountService, Account } from '../services/account.service';
import { TransactionService, Transaction } from '../services/transactions.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard implements OnInit {
  accounts: Account[] = [];
  transactions: Transaction[] = [];
  showBalances = true;

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  accountIdInput = '';
  nameInput = '';
  balanceInput: number | null = null;

  ngOnInit() {
    this.fetchAccounts();
    this.loadTransactions();
  }

    toggleBalances() {
    this.showBalances = !this.showBalances;
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
  
  loadTransactions() {
      this.transactionService.getTransactions().subscribe({
        next: (data) => this.transactions = data,
        error: (err) => console.error('Error fetching transactions:', err)
      });
    }
}
