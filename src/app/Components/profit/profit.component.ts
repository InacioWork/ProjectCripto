import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent {
  selectedCrypto: string;
  selectedCurrency: string;
  cryptoPrice: number;
  quantity: number;
  totalPrice: number;
  investmentAmount!: number;
  potentialProfit: number;
  futureBitcoinPrice!: number;
  currencyIcon!: string;

  constructor() {
    this.selectedCrypto = 'bitcoin';
    this.selectedCurrency = 'usd';
    this.cryptoPrice = 0;
    this.quantity = 1;
    this.totalPrice = 0;
    this.investmentAmount = 0;
    this.potentialProfit = 0;
    this.futureBitcoinPrice = 0;
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
        this.calculatePotentialProfit();

        // Definir a classe do ícone da moeda selecionada
        this.currencyIcon = this.getSelectedCurrencyIcon();
      })
      .catch(error => {
        console.error('Error fetching crypto price:', error);
      });
  }

  getSelectedCurrencyIcon(): string {
    switch (this.selectedCurrency) {
      case 'aed':
        return 'fa-dollar-sign';
      case 'ars':
        return 'fa-dollar-sign';
      // Adicione os casos para as outras moedas e suas respectivas classes de ícone
      default:
        return 'fa-money-bill'; // Ícone padrão, caso a moeda selecionada não tenha um ícone específico
    }
  }


  calculateTotalPrice() {
    this.totalPrice = this.cryptoPrice * this.quantity;
  }

  calculateCryptoQuantity() {
    this.quantity = this.totalPrice / this.cryptoPrice;
  }

  calculatePotentialProfit() {
    const bitcoinInvestment = this.investmentAmount / this.cryptoPrice;
    const futureInvestmentValue = bitcoinInvestment * this.futureBitcoinPrice;
    this.potentialProfit = futureInvestmentValue - this.investmentAmount;
  }
}
