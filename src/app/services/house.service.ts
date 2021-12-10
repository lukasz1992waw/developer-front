import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { House } from '../common/house';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api/houses';

  constructor(private httpClient: HttpClient) { }

  getHouseList(): Observable<House[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.houses)
    );
  }
}

interface GetResponse {
  _embedded: {
    houses: House[];
  }
}
