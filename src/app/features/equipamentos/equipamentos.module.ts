import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentoNewComponent } from './pages/equipamento-new/equipamento-new.component';
import { EquipamentoListComponent } from './pages/equipamento-list/equipamento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    EquipamentoNewComponent,
    EquipamentoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    EquipamentoNewComponent,
    EquipamentoListComponent
  ]
})
export class EquipamentosModule { }
