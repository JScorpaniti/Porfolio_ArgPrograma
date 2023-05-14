import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';
import { environmentProd } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {
  skiURL =  environmentProd.URL + 'skills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skiURL + 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skiURL + `detail/${id}`)
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skiURL + 'nueva', skills);
  }

  public update(id:number, skills: Skills):Observable<any> {
    return this.httpClient.put<any>(this.skiURL + `editar/${id}`, skills)
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.skiURL + `delete/${id}`)
  }
}
