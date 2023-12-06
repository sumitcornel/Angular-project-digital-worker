

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioEntry } from './portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/portfolio';

  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<PortfolioEntry[]> {
    return this.http.get<PortfolioEntry[]>(this.apiUrl);
  }

  addPortfolioEntry(entry: PortfolioEntry): Observable<PortfolioEntry> {
    return this.http.post<PortfolioEntry>(this.apiUrl, entry);
  }

  updatePortfolioEntry(entry: PortfolioEntry): Observable<PortfolioEntry> {
    return this.http.put<PortfolioEntry>(`${this.apiUrl}/${entry.id}`, entry);
  }

  deletePortfolioEntry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

