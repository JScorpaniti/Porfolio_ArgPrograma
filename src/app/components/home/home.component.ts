import { Component, NgModule } from '@angular/core';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faUserPen = faUserPen;
  personalData:any;

  constructor(
    private datosPortofilio:PortfolioService
  ){}

  ngOnInit() : void {
    this.datosPortofilio.obtenerDatos().subscribe(data => {
      this.personalData = data;
    })
  }

  editar: boolean | undefined;
  editando: boolean | undefined;
  mensaje_enlace: string = 'Editar perfil';
  perfilEditando:any;
  perfilOriginal:any;

  editarPerfil() {
    this.perfilEditando = this.personalData;
    this.perfilOriginal = {...this.perfilEditando};
    if (this.editar) {
      this.editando = false;
      this.editar = false;
    } else {
      this.editando = true;
      this.editar = true;
    }

    if (this.editar) {
      this.personalData.name = '';
      this.personalData.position = '';
      this.personalData.description = '';
    } 
  }

  cancelarEdicion() {
    this.editar = false;
    this.perfilEditando.name = this.perfilOriginal.name;
    this.perfilEditando.position = this.perfilOriginal.position;
    this.perfilEditando.description = this.perfilOriginal.description;
    this.perfilOriginal = null;
  }
  
}