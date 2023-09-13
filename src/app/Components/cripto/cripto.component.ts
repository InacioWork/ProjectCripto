import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.css']
})
export class CriptoComponent implements OnInit {
  selectedCrypto: string;
  selectedCurrency: string;
  cryptoPrice: number;
  quantity: number;
  totalPrice: number;

  constructor() {
    this.selectedCrypto = 'bitcoin';
    this.selectedCurrency = 'usd';
    this.cryptoPrice = 0;
    this.quantity = 1;
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.getCryptoPrice();
  }

  getCryptoPrice() {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${this.selectedCrypto}&vs_currencies=${this.selectedCurrency}`;
    axios.get(apiUrl)
      .then(response => {
        this.cryptoPrice = response.data[this.selectedCrypto][this.selectedCurrency];
        this.calculateTotalPrice();
      })
      .catch(error => {
        console.error('Error fetching crypto price:', error);
      });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cryptoPrice * this.quantity;
  }

  calculateCryptoQuantity() {
    this.quantity = this.totalPrice / this.cryptoPrice;
  }
}
