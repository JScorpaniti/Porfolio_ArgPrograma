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
  mensaje_enlace: string = 'Editar perfil';
  perfilEditando:any;
  perfilOriginal:any;

  editarPerfil() {
    this.perfilEditando = this.personalData;
    this.perfilOriginal = {...this.perfilEditando};
    if (this.editar) {
      this.editar = false;
    } else {
      this.editar = true;
    }
  
    // Actualizar mensaje_enlace después de actualizar editar
    if (this.editar) {
      this.personalData.name = '';
      this.personalData.position = '';
      this.personalData.description = '';
      this.mensaje_enlace = 'Confirmar';
    } else {
      this.mensaje_enlace = 'Editar perfil';
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