import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomApiService {
  constructor(private httpClient: HttpClient) {}

  getRandomData() {
    return this.httpClient.get<any>(
      'https://random-data-api.com/api/cannabis/random_cannabis?size=30'
    );
  }
}
