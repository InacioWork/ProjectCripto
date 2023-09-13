import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  displayValue = '';
  result = '';

  appendToDisplay(value: string) {
    const validInputRegex = /^[\d+\-*/]+$/; // Expressão regular para validar o input
    if (validInputRegex.test(value)) {
      this.displayValue += value;
    }
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Erro de digitalização';
    }
  }

  clear() {
    this.displayValue = '';
    this.result = '';
  }

  clearLastDigit() {
    this.displayValue = this.displayValue.slice(0, -1);
  }
}
