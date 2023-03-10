import { EsUsuario } from '../models/user.module';
import { ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-registro-tickets-usuario',
  templateUrl: './registro-tickets-usuario.component.html',
  styleUrls: ['./registro-tickets-usuario.component.scss']
})
export class RegistroTicketsUsuarioComponent implements OnInit {

  public dataSource!:       MatTableDataSource<EsUsuario>;
  public EsListaUsarios!:   EsUsuario[];
  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort)       sort!:      MatSort;

  displayedColumns:         string[]
   = ['Id','TipoReclamo','EstadoTicket','PrimerosNombres','Apellidos','NumeroIdentidad','CodigoAgencia','FechaReclamo','Queja','Acciones']

  constructor (private api: ApiService){

  }
  ngOnInit(): void {
    this.EsObtenerUsuarioRegistrado();
  }

    EsObtenerUsuarioRegistrado(){
      this.api.EsObtenerRegistroUsuario()
      .subscribe(res=>{
        this.EsListaUsarios       =   res;
        this.dataSource           =   new MatTableDataSource(this.EsListaUsarios);
        this.dataSource.paginator =   this.paginator;
        this.dataSource.sort      =   this.sort;
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
}
