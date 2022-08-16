import { LocacaoService } from './../../services/locacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './locacao-list.component.html',
  styleUrls: ['./locacao-list.component.scss']
})
export class LocacaoListComponent implements OnInit {

  locacoes: any;

  constructor(private locacaoService: LocacaoService) { }

  ngOnInit(): void {
    this.listLocacoes();
  }

  listLocacoes(): void {
    this.locacaoService.list()
    .subscribe(
      data => {
        this.locacoes = data;
        console.log(data);
    },
      error => {
        console.log(error);
      }
    )
  }
}
