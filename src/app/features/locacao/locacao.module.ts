import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocacaoListComponent } from './pages/locacao-list/locacao-list.component';
import { LocacaoNewComponent } from './pages/locacao-new/locacao-new.component';

import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItensComponent } from './component/itens/itens.component';


@NgModule({
  declarations: [
    LocacaoListComponent,
    LocacaoNewComponent,
    ItensComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()

  ],
  exports: [
    LocacaoListComponent,
    LocacaoNewComponent
  ]
})
export class LocacaoModule { }
