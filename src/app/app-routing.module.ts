import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRegistroUsuarioComponent } from './crear-registro-usuario/crear-registro-usuario.component';
import { DetalleTicketUsuarioComponent } from './detalle-ticket-usuario/detalle-ticket-usuario.component';
import { RegistroTicketsUsuarioComponent } from './registro-tickets-usuario/registro-tickets-usuario.component';

const routes: Routes = [
  {path:  '', redirectTo:'EsCrearRegistroTicket',pathMatch: 'full'},
  {path:  'EsCrearRegistroTicket',  component:CrearRegistroUsuarioComponent},
  {path:  'EsRegistroTicket',       component:RegistroTicketsUsuarioComponent},
  {path:  'EsDetalleTicketUsuario', component:DetalleTicketUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
