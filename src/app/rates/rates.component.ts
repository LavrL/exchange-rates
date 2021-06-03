import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  public selectedDate = '2021-06-01';
  public baseCurrencies = ['EUR', 'USD', 'GBP'];
  public selectedBaseCurrency = this.baseCurrencies[0];
  public currencyList$: Observable<any>;
  public currenciesList = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.currencyList$ = this.http.getCurrenciesList(this.selectedDate, this.selectedBaseCurrency);
  }

  refreshRates(): void {
    this.currencyList$ = this.http.getCurrenciesList(this.selectedDate, this.selectedBaseCurrency);
  }
}
