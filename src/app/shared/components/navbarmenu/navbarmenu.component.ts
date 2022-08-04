import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbarmenu',
  templateUrl: './navbarmenu.component.html',
  styleUrls: ['./navbarmenu.component.scss']
})
export class NavbarmenuComponent implements OnInit {

  user?: User;

  constructor() { }

  ngOnInit(): void { 
    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage) {
      this.user = JSON.parse(userSessionStorage);
    }
  }
  exit(){
    sessionStorage.clear()
  }
}
