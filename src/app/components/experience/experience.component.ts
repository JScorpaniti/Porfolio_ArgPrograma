import { Component } from '@angular/core';
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
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.myExperience=data.experience;
    })
  }
}
