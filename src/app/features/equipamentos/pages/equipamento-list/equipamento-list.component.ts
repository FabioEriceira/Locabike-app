import { EquipamentosService } from './../../services/equipamentos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './equipamento-list.component.html',
  styleUrls: ['./equipamento-list.component.scss']
})
export class EquipamentoListComponent implements OnInit {

  equipamentos: any;

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {
    this.listEquipamentos();
  }

  listEquipamentos(): void {
    this.equipamentosService.list()
    .subscribe(
      data => {
        this.equipamentos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}

