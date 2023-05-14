import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { environmentProd } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SEducationService {
  eduURL = environmentProd.URL + 'educacion/'

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Education[]>{
    return this.HttpClient.get<Education[]>(this.eduURL + 'lista');
  }

  public detail(id:number): Observable<Education>{
    return this.HttpClient.get<Education>(this.eduURL + `detail/${id}`)
  }

  public save(Education: Education): Observable<any>{
    return this.HttpClient.post<any>(this.eduURL + 'nueva', Education);
  }

  public update(id:number, Education: Education):Observable<any> {
    return this.HttpClient.put<any>(this.eduURL + `editar/${id}`, Education)
  }

  public delete(id:number): Observable<any>{
    return this.HttpClient.delete<any>(this.eduURL + `delete/${id}`)
  }
}
