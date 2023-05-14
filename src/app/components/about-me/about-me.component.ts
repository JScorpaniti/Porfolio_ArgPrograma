import { Component, NgModule } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutComponent {
  persona: persona = new persona ("","","","");

  constructor(public datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe((data: persona[]) => {
      if (data.length > 0) {
        this.persona = data[0];
      }
    });
  }
  

  editar: boolean | undefined;
  editando: boolean | undefined;
  mensaje_enlace: string = 'Editar perfil';
  perfilEditando:any;
  perfilOriginal:any;

  editarPerfil() {
    this.perfilEditando = this.persona;
    this.perfilOriginal = {...this.perfilEditando};
    if (this.editar) {
      this.editando = false;
      this.editar = false;
    } else {
      this.editando = true;
      this.editar = true;
    } 

    if (this.editar) {
      this.persona.name = '';
      this.persona.lastname = '';
      this.persona.description = '';
      this.persona.img = '';
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