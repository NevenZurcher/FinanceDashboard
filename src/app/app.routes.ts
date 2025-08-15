import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Accounts } from './accounts/accounts';
import { Transactions } from './transactions/transactions';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: Dashboard },
    { path: 'accounts', component: Accounts },
    { path: 'transactions', component: Transactions}
];
