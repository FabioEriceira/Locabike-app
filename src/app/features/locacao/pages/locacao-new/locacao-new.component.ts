import { ClienteListService } from './../../../clientes/services/cliente-list.service';
import { LocacaoService } from './../../services/locacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './locacao-new.component.html',
  styleUrls: ['./locacao-new.component.scss']
})
export class LocacaoNewComponent implements OnInit {

  /* Definindo as variáveis */

  dataRetirada: any;
  dataDevolucao: any;
  clienteId: any;
  clientes: any;
  

  constructor(private locacaoService: LocacaoService,
              private clienteListService: ClienteListService) { }

  ngOnInit(): void {
    this.exibirCliente()
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


