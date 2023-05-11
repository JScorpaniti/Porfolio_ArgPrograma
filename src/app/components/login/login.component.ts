import { Component } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMsj!: string;

  constructor(private tokenService: TokenService, private authService:AuthService, private router:Router){}

  ngOnInit():void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
      this.authService.login(this.loginUsuario).subscribe(
        data => {
          this.isLogged = true;
          this.isLogged = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUsername(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);
        }, err =>{
          this.isLogged = false;
          this.isLogginFail= true;
          this.errorMsj = err.error.mensaje;
          console.log(this.errorMsj);;
     }
      )
    
  }
}

