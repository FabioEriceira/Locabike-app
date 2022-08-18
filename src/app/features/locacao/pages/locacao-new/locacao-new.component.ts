import { ClienteListService } from './../../../clientes/services/cliente-list.service';
import { LocacaoService } from './../../services/locacao.service';
import { Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { ItensComponent } from '../../component/itens/itens.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as moment from 'moment';




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


  dataRetirada: any = new Date();
  dataDevolucao: any = new Date();
  clienteId: any;
  clientes: any;
  itens: any = {};
  id: any;
  equipamentoId: any;
  qtdDiasLocacao: any;
  subtotal: any;
  valorFinal: any = 0;

  constructor(private locacaoService: LocacaoService,
              private clienteListService: ClienteListService,
              public dialog: MatDialog) { }



  ngOnInit(): void {
    this.exibirCliente()
  }

  editItem(element: PeriodicElement): void {
    this.openDialog(element);
    console.log("element "+element)
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
    let newDateRetirada: moment.Moment = moment.utc(this.dataRetirada).local();
    this.dataRetirada = newDateRetirada.format("YYYY-MM-DD")+"T"+"00:00:00";

    let newDataDevolucao: moment.Moment = moment.utc(this.dataDevolucao).local();
    this.dataDevolucao = newDataDevolucao.format("YYYY-MM-DD")+"T"+"00:00:00";

    const locacaoNew = {
      dataRetirada: this.dataRetirada,
      dataDevolucao: this.dataDevolucao,
      clienteId: this.clienteId,
      valorFinal: this.valorFinal,
      itens: this.dataSource
    };
    console.log("dataRetirada");
    console.log(this.dataRetirada);

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


