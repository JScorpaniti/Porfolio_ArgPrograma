import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  persona: persona = new persona("","","","");
  constructor(public datosPortfolio:PortfolioService){
}

ngOnInit() : void {
  this.datosPortfolio.getPersona().subscribe(data => {
    this.persona = data;
  })
}
}

