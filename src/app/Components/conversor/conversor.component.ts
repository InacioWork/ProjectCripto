import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Currency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  amount!: number;
  fromCurrency: string = 'USD';
  toCurrency: string = 'BRL';
  convertedAmount: number = 0;
  currencies: Currency[] = [
    { name: 'Afegane Afegão', code: 'AFN' },
    { name: 'Ariary Malgaxe', code: 'MGA' },
    { name: 'Baht Tailandês', code: 'THB' },
    { name: 'Coroa Dinamarquesa', code: 'DKK' },
    { name: 'Coroa Norueguesa', code: 'NOK' },
    { name: 'Coroa Sueca', code: 'SEK' },
    { name: 'Dirham dos Emirados Árabes Unidos', code: 'AED' },
    { name: 'Dinar Kuwaitiano', code: 'KWD' },
    { name: 'Dinar Sérvio', code: 'RSD' },
    { name: 'Dólar Americano', code: 'USD' },
    { name: 'Dólar Australiano', code: 'AUD' },
    { name: 'Dólar Canadense', code: 'CAD' },
    { name: 'Dólar das Bahamas', code: 'BSD' },
    { name: 'Dólar de Barbados', code: 'BBD' },
    { name: 'Dólar de Belize', code: 'BZD' },
    { name: 'Dólar de Brunei', code: 'BND' },
    { name: 'Dólar de Fiji', code: 'FJD' },
    { name: 'Dólar de Hong Kong', code: 'HKD' },
    { name: 'Dólar de Singapura', code: 'SGD' },
    { name: 'Dólar Jamaicano', code: 'JMD' },
    { name: 'Dólar Neozelandês', code: 'NZD' },
    { name: 'Euro', code: 'EUR' },
    { name: 'Franco Suíço', code: 'CHF' },
    { name: 'Forint Húngaro', code: 'HUF' },
    { name: 'Kuna Croata', code: 'HRK' },
    { name: 'Lari Georgiano', code: 'GEL' },
    { name: 'Leu Moldávio', code: 'MDL' },
    { name: 'Leu Romeno', code: 'RON' },
    { name: 'Lev Búlgaro', code: 'BGN' },
    { name: 'Libra Esterlina', code: 'GBP' },
    { name: 'Lira Turca', code: 'TRY' },
    { name: 'Manat do Azerbaijão', code: 'AZN' },
    { name: 'Peso Argentino', code: 'ARS' },
    { name: 'Peso Chileno', code: 'CLP' },
    { name: 'Peso Colombiano', code: 'COP' },
    { name: 'Peso Cubano', code: 'CUP' },
    { name: 'Peso Cubano Convertível', code: 'CUC' },
    { name: 'Peso Dominicano', code: 'DOP' },
    { name: 'Peso Filipino', code: 'PHP' },
    { name: 'Peso Mexicano', code: 'MXN' },
    { name: 'Peso Paraguaio', code: 'PYG' },
    { name: 'Rand Sul-Africano', code: 'ZAR' },
    { name: 'Real Brasileiro', code: 'BRL' },
    { name: 'Ringgit Malaio', code: 'MYR' },
    { name: 'Rial Iraniano', code: 'IRR' },
    { name: 'Rublo Russo', code: 'RUB' },
    { name: 'Rupia Indonésia', code: 'IDR' },
    { name: 'Rupia Paquistanesa', code: 'PKR' },
    { name: 'Shekel Israelense', code: 'ILS' },
    { name: 'Taka Bengalesa', code: 'BDT' },
    { name: 'Tenge Cazaque', code: 'KZT' },
    { name: 'Yen Japonês', code: 'JPY' },
    { name: 'Yuan Chinês', code: 'CNY' },
    // Adicione mais moedas conforme necessário
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.watchForChanges();
  }

  watchForChanges() {
    setInterval(() => {
      if (this.amount && this.fromCurrency && this.toCurrency) {
        this.convert();
      }
    }, 0);
  }

  convert() {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;
    this.http.get<any>(apiUrl).subscribe(data => {
      const rate = data.rates[this.toCurrency];
      this.convertedAmount = this.amount * rate;
    });
  }

  swapCurrencies() {
    const tempCurrency = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = tempCurrency;
  }

  getCurrencyOptionText(currency: Currency): string {
    const maxInputLength = 19; // Tamanho máximo do input
    if (currency.name.length > maxInputLength) {
      return currency.name.substring(0, maxInputLength) + '...';
    } else {
      return currency.name;
    }
  }
}
