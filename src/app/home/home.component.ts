import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currencyList$: Observable<any>;
  public selectedDate = '2021-06-01';
  public baseCurrencies = ['EUR', 'USD', 'GBP'];
  public selectedBaseCurrency = this.baseCurrencies[0];
  public currenciesList = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.currencyList$ = this.http.getCurrenciesList(this.selectedDate, this.selectedBaseCurrency);
  }

  refreshCurrencies(): void {
    this.currencyList$ = this.http.getCurrenciesList(this.selectedDate, this.selectedBaseCurrency);
  }
}
