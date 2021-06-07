import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'selectdata',
  templateUrl: './selectdata.component.html',
  styleUrls: ['./selectdata.component.scss']
})
export class SelectdataComponent {
  public selectedDate = '2021-06-01';
  public baseCurrencies = ['EUR', 'USD', 'GBP'];
  public selectedBaseCurrency = this.baseCurrencies[0];

  @Output()
  dateSelected = new EventEmitter<any>();
  @Output()
  currencySelected = new EventEmitter<any>();

}
