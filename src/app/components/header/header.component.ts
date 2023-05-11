import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  miPortfolio:any;
  isLogged = false;


  constructor(
    private router:Router,
    private datosPortfolio:PortfolioService,
    private tokenService: TokenService
  ){}
    faFacebook = faFacebook;
    faGithub = faGithub;
    faLinkedin = faLinkedin;

    ngOnInit(): void {
      this.datosPortfolio.getPersona().subscribe(data =>{
        this.miPortfolio=data;
      });

      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      
    }

    onLogOut():void {
      this.tokenService.logOut();
      window.location.reload();
    }
  
    login(){
      this.router.navigate(['/login']);
    }
  }

