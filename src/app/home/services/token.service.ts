import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {}

  async initializeApp(): Promise<void> {
    // Make an HTTP GET request to fetch initial data
    try {
      const response = await this.http.get('https://api.example.com/initial-data').toPromise();
      console.log('Initial data fetched:', response);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  }
}
