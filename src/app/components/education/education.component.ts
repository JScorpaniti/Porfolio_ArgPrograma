import { Component } from '@angular/core';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/servicios/s-education.service';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  myEducation: Education[] = [];
  constructor(
    private datosPortfolio:SEducationService,
    private tokenService: TokenService
  ){}

  isLogged = false;

  ngOnInit() : void{
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.datosPortfolio.lista().subscribe(
      data => {this.myEducation = data;}
    )
  }

  delete(id?: number) {
    const confirmacion = confirm('Estas seguro de eliminar esta educacion?')
    if(confirmacion) {
      this.datosPortfolio.delete(id).subscribe(data =>{
        this.cargarEducacion();
      })
    }
  }

}
