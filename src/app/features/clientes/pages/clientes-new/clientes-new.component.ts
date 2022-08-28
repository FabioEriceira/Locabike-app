import { ClienteListService } from './../../services/cliente-list.service';
import { ClientesListComponent } from './../clientes-list/clientes-list.component';
import { Component, OnInit, enableProdMode, LOCALE_ID, Input, TemplateRef } from '@angular/core';
import { CidadesService } from 'src/app/shared/services/cidades.service';
import { EstadosService } from 'src/app/shared/services/estados.service';
import { FormGroup } from '@angular/forms';

// import { ManyToOne, JoinColumn } from 'typeorm'



@Component({
  selector: 'app-clientes-new',
  templateUrl: './clientes-new.component.html',
  styleUrls: ['./clientes-new.component.scss']
})
export class ClientesNewComponent implements OnInit {

  submitted = false;
  cidades: any;
  clientes: any;
  cpf: any;
  nome: any;
  telefone: any;
  logradouro: any;
  cidade: any;
  estado: any;
  endereco:any = {};
  cep: any;

  constructor(
    /*private cidadesService: CidadesService,
    private estadosService: EstadosService,*/
    private clienteListService: ClienteListService
  ) { }

  ngOnInit(): void {
//    this.exibirCidades();
  }

/*  exibirCidades(): void {
    this.cidadesService.list()
      .subscribe(
        data => {
          this.cidades = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }*/


  save(): void {
    const clientesNew = {
      endereco: {logradouro:this.logradouro, cidade: this.cidade, estado: this.estado, cep: this.cep},
      cpf: this.cpf,
      nome: this.nome,
      telefone: this.telefone
    };
    this.clienteListService.create(clientesNew)
      .subscribe(
        response => {
          console.log(response);
          alert("Cliente Cadastrado");
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() { this.submitted = true; }
}
