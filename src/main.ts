import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Dashboard } from './app/dashboard/dashboard';
import { Accounts } from './app/accounts/accounts';
import { Transactions } from './app/transactions/transactions';
import { provideHttpClient } from '@angular/common/http';


const routes = [
  { path: '', component: Dashboard },
  { path: 'accounts', component: Accounts },
  { path: 'transactions', component: Transactions}
]

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
