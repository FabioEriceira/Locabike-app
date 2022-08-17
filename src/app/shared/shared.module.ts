import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarmenuComponent } from './components/navbarmenu/navbarmenu.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { CepPipe } from './pipes/cep.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarmenuComponent,
    PhonePipe,
    CpfPipe,
    CepPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarmenuComponent,
    PhonePipe,
    CpfPipe,
    CepPipe
  ]
})
export class SharedModule { }
