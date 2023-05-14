import { Injectable } from '@angular/core';
import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { environmentProd } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL =  environmentProd.URL + 'experiencia/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'lista');
  }

  public detail(id:number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `detail/${id}`)
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'nueva', experience);
  }

  public update(id:number, experience: Experience):Observable<any> {
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experience)
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`)
  }
}
