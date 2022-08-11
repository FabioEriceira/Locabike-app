import { EquipamentosModule } from './features/equipamentos/equipamentos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesModule } from './features/clientes/clientes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgxMaskModule } from 'ngx-mask';
import { EstadosService } from './shared/services/estados.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    LoginModule,
    ClientesModule,
    EquipamentosModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: true})
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
