import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {

  private apiUrl = 'http://localhost:3000/';
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private http: HttpClient) { }

  getResponse(userPromt: string): Observable<string> {
    const params = new HttpParams().set('userPromt', userPromt);
    return this.http.get<string>(this.apiUrl + 'replicate', { params });
  }
}
