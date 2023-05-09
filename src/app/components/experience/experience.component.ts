import { Component, ElementRef, ViewChild } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  myExperience:any;
  constructor( private datosPortfolio:PortfolioService){}

  ngOnInit() : void{
    this.datosPortfolio.getPersona().subscribe(data =>{
      this.myExperience=data;
    })
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


    if(this.editar){
      this.myExperience.empresa = '';
      this.myExperience.tarea = '';
    }
  }

  
  
  agregarExperiencia() {

    this.editar = true;
    this.editando = false;
    this.nuevaExperiencia = {
      empresa: '',
      tarea: ''
    };
  }

  crearExperiencia() {
    this.myExperience.push(this.nuevaExperiencia);
    this.editar = false;
  }

  eliminarExperiencia(index: number) {
    const confirmacion = confirm('Estas seguro de eliminar esta experiencia?')
    if(confirmacion) {
      this.myExperience.splice(index, 1)
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
