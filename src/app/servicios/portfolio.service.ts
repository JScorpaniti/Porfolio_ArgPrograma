import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environmentProd } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = environmentProd.URL + 'personas';

  constructor(
    private http:HttpClient
  ) { }


  public getPersona():Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + '/traer');
  }
}
