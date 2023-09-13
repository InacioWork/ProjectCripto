import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';
import { Paginator } from 'primeng/paginator';

interface Crypto {
  name: string;
  symbol: string;
  current_price: number;
  market_cap_rank: number;
  image: string;
}

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  source: {
    name: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cryptoList: Crypto[] = [];
  expandImage1 = false;
  expandImage2 = false;
  expandImage3 = false;
  expandImage4 = false;
  expandImage5 = false;

  totalRecords!: number;
  currentPage: number = 1;
  pageSize: number = 10;

  articles!: any[];

  @ViewChild('dt') table!: Table;
  @ViewChild('paginator') paginator!: Paginator;


  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.fetchAllCryptoData();
    this.loadCryptoNews();
  }


  fetchAllCryptoData() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250`;
    this.http.get<Crypto[]>(url).subscribe(data => {
      this.cryptoList = data;
      this.totalRecords = this.cryptoList.length;
      this.updatePaginator();
    });
  }

  updatePaginator() {
    if (this.cryptoList.length > 0) {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.table.value = this.cryptoList.slice(startIndex, endIndex);
      this.table.totalRecords = this.totalRecords;
    }
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.updatePaginator();
  }

  filterByName(value: string) {
    this.table.filter(value, 'name', 'contains');
  }

  loadCryptoNews() {
    const apiKey = '60afae4496cf4224b143430b295139e3';
    const pageSize = 12; // Define o número máximo de notícias a serem obtidas

    this.http
      .get(`https://newsapi.org/v2/everything?q=crypto&pageSize=${pageSize}&apiKey=${apiKey}`)
      .subscribe((response: any) => {
        this.articles = response.articles;
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

}
