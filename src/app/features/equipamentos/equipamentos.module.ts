import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EquipamentoNewComponent } from './pages/equipamento-new/equipamento-new.component';
import { EquipamentoListComponent } from './pages/equipamento-list/equipamento-list.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    EquipamentoNewComponent,
    EquipamentoListComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    EquipamentoNewComponent,
    EquipamentoListComponent
  ]
})
export class EquipamentosModule { }
