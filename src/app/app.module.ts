import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { ConversorComponent } from './Components/conversor/conversor.component';
import { CriptoComponent } from './Components/cripto/cripto.component';
import { FooterComponent } from './Components/footer/footer.component';
import { JurosComponent } from './Components/juros/juros.component';
import { ProfitComponent } from './Components/profit/profit.component';
import { ContatoComponent } from './Components/footer/contato/contato.component';
import { PatrociniosComponent } from './Components/footer/patrocinios/patrocinios.component';
import { PrivacidadeComponent } from './Components/footer/privacidade/privacidade.component';
import { SobreComponent } from './Components/footer/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    TopBarComponent,
    ConversorComponent,
    CriptoComponent,
    FooterComponent,
    JurosComponent,
    ProfitComponent,
    ContatoComponent,
    PatrociniosComponent,
    PrivacidadeComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
