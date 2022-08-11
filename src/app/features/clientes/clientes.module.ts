import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClientesNewComponent } from './pages/clientes-new/clientes-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';

import { CurrencyPipe } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesNewComponent
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
    ClientesListComponent,
    ClientesNewComponent
  ],
  providers: [CurrencyPipe]
})
export class ClientesModule { }

