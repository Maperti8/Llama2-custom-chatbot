import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  getResponse(userPromt: string): Observable<string> {
    const params = { userPromt }; 
    return this.http.get<string>(this.apiUrl + 'replicate', { params });
  }
}
