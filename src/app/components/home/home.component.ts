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
  editarPerfil() {
    if (this.editar) {
      this.editar = false;
    } else {
      this.editar = true;
    }
  
    // Actualizar mensaje_enlace después de actualizar editar
    if (this.editar) {
      this.personalData.name = '';
      this.personalData.position = '';
      this.mensaje_enlace = 'Confirmar';
    } else {
      this.mensaje_enlace = 'Editar perfil';
    }
  }
}