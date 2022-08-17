import { ClienteListService } from './../../../clientes/services/cliente-list.service';
import { LocacaoService } from './../../services/locacao.service';
import { Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { ItensComponent } from '../../component/itens/itens.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  equipamentoId: number;
  qtdDiasLocacao: number;
  subtotal: number;

}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  templateUrl: './locacao-new.component.html',
  styleUrls: ['./locacao-new.component.scss']
})
export class LocacaoNewComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;

  displayedColumns: string[] = ['id', 'equipamentoId', 'qtdDiasLocacao', 'subtotal', 'actions'];
  dataSource = ELEMENT_DATA;

  /* Definindo as variáveis */

  dataRetirada: any;
  dataDevolucao: any;
  clienteId: any;
  clientes: any;


  constructor(private locacaoService: LocacaoService,
              private clienteListService: ClienteListService,
              public dialog: MatDialog) { }



  ngOnInit(): void {
    this.exibirCliente()
  }

  editItem(element: PeriodicElement): void {
    this.openDialog(element);
  }

  deleteItem(id: number): void {
    this.dataSource = this.dataSource.filter(p => p.id !== id);
  }

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ItensComponent, {
      width: '250px',
      data: element === null? {
        id: null,
        equipamentoId: null,
        qtdDiasLocacao: null,
        subtotal: null
    } : {
        id: element.id,
        equipamentoId: element.equipamentoId,
        qtdDiasLocacao: element.qtdDiasLocacao,
        subtotal: element.subtotal
    }
  });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if (this.dataSource.map(p => p.id).includes(result.id)){
          this.dataSource[ result.id -1 ] = result;
        } else {
          this.dataSource.push(result);
        }
        this.table.renderRows();
      }
    });
  }
  exibirCliente(): void{
    this.clienteListService.list()
      .subscribe(
        data => {
          this.clientes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const locacaoNew = {
      dataRetirada: this.dataRetirada,

    };
    console.log(locacaoNew);
    this.locacaoService.create(locacaoNew)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}


