import { Component } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SSkillsService } from 'src/app/servicios/s-skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  mySkills: Skills[] = [];
  constructor(
    private datosPortfolio:SSkillsService,
    private tokenService: TokenService
  ){}

  isLogged = false;

  ngOnInit() : void{
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills():void{
    this.datosPortfolio.lista().subscribe(
      data => {this.mySkills = data;}
    )
  }

  delete(id?: number) {
    const confirmacion = confirm('Estas seguro de eliminar esta habilidad?')
    if(confirmacion) {
      this.datosPortfolio.delete(id).subscribe(data =>{
        this.cargarSkills();
      })
    }
  }

}


