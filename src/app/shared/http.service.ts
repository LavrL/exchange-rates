import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getCurrenciesList(selectedDate: string, selectedValue: string): Observable<any> {
    return this.http.get(`https://exchange-rates.abstractapi.com/v1/historical/?api_key=34b01d5a3e0740e1b202c1cfee4c33e7&base=${selectedValue}&date=${selectedDate}`);
  }
}
