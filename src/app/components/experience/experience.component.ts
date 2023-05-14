import { Component, ElementRef, ViewChild } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  myExperience: Experience[] = [];
  constructor( private datosPortfolio:SExperienciaService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit() : void{
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.datosPortfolio.lista().subscribe(
      data => {this.myExperience = data;}
    )
  }

  editar: boolean | undefined;
  editando: boolean | undefined;
  experienciaSeleccionada: any;
  experienciaOriginal: any;
  nuevaExperiencia: any;
  
  editarExperiencia(indice: number) {
    this.experienciaSeleccionada = this.myExperience.find((experiencia : any, index : number) => index === indice)
    this.experienciaOriginal = {...this.experienciaSeleccionada};
    if (this.editar) {
      this.editando = false;
      this.editar = false;
    } else {
      this.editando = true;
      this.editar = true;
    }


    /*if(this.editar){
      this.myExperience.empresa = '';
      this.myExperience.tarea = '';
    }*/
  }

  
  
  
 
  delete(id?: number) {
    const confirmacion = confirm('Estas seguro de eliminar esta experiencia?')
    if(confirmacion) {
      this.datosPortfolio.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      })
    }
  }

  cancelarEdicion(){
    this.editar = false;
    this.experienciaSeleccionada.empresa = this.experienciaOriginal.empresa;
    this.experienciaSeleccionada.tarea = this.experienciaOriginal.tarea;
    this.experienciaOriginal = null;
  }
  
  cancelarNueva() {
    this.nuevaExperiencia = null;
    this.editar = false;
    
  }
  
}
