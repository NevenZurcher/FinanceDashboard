import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Transaction {
  transactionId: string;
  date: string;
  description: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://q8fstdvgh2.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) {}

  getTransactions(token?: string): Observable<Transaction[]> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('Authorization', token);

    return this.http.get<{ statusCode: number; body: string }>(`${this.apiUrl}/transactions`, { headers })
      .pipe(
        map(response => JSON.parse(response.body) as Transaction[])
      );
  }
}
