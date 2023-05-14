import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  miPortfolio: persona = new persona("","","","");
  isLogged = false;

  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(
    private router: Router,
    private datosPortfolio: PortfolioService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(
      (data: persona[]) => {
        if (data.length > 0) {
          this.miPortfolio = data[0];
        }
      },
      error => {
        console.error('Error al obtener los datos del portfolio:', error);
      },
      () => {
        if (this.tokenService.getToken()) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      }
    );
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
}