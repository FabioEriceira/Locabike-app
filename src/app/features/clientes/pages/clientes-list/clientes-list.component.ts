import { Component, OnInit } from '@angular/core';
import { ClienteListService } from '../../services/cliente-list.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clientes: any; 
  
  constructor(private clienteListService: ClienteListService ) { }

  ngOnInit(): void {
    this.listClientes();
  }

  listClientes(): void {
    this.clienteListService.list()
    .subscribe(
      data => {
        this.clientes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
