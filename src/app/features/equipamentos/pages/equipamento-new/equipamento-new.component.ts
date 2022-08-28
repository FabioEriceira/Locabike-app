import { EquipamentosService } from './../../services/equipamentos.service';
import { Component, OnInit } from '@angular/core';

interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './equipamento-new.component.html',
  styleUrls: ['./equipamento-new.component.scss']
})
export class EquipamentoNewComponent implements OnInit {

  tipos: Tipo[] = [
    {value: 'MTB-0', viewValue: 'MTB'},
    {value: 'SPEED-1', viewValue: 'SPEED'},
  ];

  
  submitted = false;
  tipoEquipamento: any;
  fabricacao: any;
  marca?: string = "";
  grupo?: string = "";
  qtdDisponivel: any;
  valorLocacao: any;

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {

  }

  save(): void {
    const equipamentoNew = {
      tipoEquipamento: this.tipoEquipamento,
      fabricacao: this.fabricacao,
      marca: this.marca,
      grupo: this.grupo,
      qtdDisponivel: this.qtdDisponivel,
      valorLocacao: this.valorLocacao

    };
    console.log(equipamentoNew);
    this.equipamentosService.create(equipamentoNew)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() { this.submitted = true; }
}
