import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  mySkills: any;
  constructor( private datosPortfolio:PortfolioService){}

  ngOnInit() : void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.mySkills=data.habilities;
    })
  }

}


