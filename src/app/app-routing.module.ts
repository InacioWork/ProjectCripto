import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { ProfitComponent } from './Components/profit/profit.component';
import { CriptoComponent } from './Components/cripto/cripto.component';
import { ConversorComponent } from './Components/conversor/conversor.component';
import { JurosComponent } from './Components/juros/juros.component';
import { SobreComponent } from './Components/footer/sobre/sobre.component';
import { ContatoComponent } from './Components/footer/contato/contato.component';
import { PrivacidadeComponent } from './Components/footer/privacidade/privacidade.component';
import { PatrociniosComponent } from './Components/footer/patrocinios/patrocinios.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'profit',component: ProfitComponent},
  {path:'cripto',component: CriptoComponent},
  {path:'calculadora',component: CalculadoraComponent},
  {path:'conversor',component: ConversorComponent},
  {path:'juros',component: JurosComponent},
  {path:'sobre',component: SobreComponent},
  {path:'contato',component: ContatoComponent},
  {path:'privacidade',component: PrivacidadeComponent},
  {path:'pratrocinio',component: PatrociniosComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // Isso faz com que a página role até o topo quando você navega para uma nova rota
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
