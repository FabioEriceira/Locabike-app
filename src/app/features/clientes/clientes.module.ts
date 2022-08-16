import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CurrencyPipe } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClientesNewComponent } from './pages/clientes-new/clientes-new.component';

import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppMaterialModule,
    NgxMaskModule.forChild()

  ],
  exports: [
    ClientesListComponent,
    ClientesNewComponent
  ],
  providers: [CurrencyPipe]
})
export class ClientesModule { }

