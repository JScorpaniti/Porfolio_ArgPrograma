import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  miPortfolio:any;

  constructor(
    private router:Router,
    private datosPortfolio:PortfolioService
  ){}
    faFacebook = faFacebook;
    faGithub = faGithub;
    faLinkedin = faLinkedin;

    ngOnInit(): void {
      this.datosPortfolio.getPersona().subscribe(data =>{
        this.miPortfolio=data;
      });
    }
  
    login(){
      this.router.navigate(['/login']);
    }
  }

