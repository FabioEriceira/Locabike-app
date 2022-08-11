import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './features/clientes/pages/clientes-list/clientes-list.component';
import { ClientesNewComponent } from './features/clientes/pages/clientes-new/clientes-new.component';
import { EquipamentoListComponent } from './features/equipamentos/pages/equipamento-list/equipamento-list.component';
import { EquipamentoNewComponent } from './features/equipamentos/pages/equipamento-new/equipamento-new.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'clientes-new', component: ClientesNewComponent },
  { path: 'clientes-list', component: ClientesListComponent },
  { path: 'equipamento-list', component: EquipamentoListComponent },
  { path: 'equipamento-new', component: EquipamentoNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
