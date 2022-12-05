import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  readonly url = 'https://localhost:44366/api';

  constructor(private httpclient: HttpClient) { }

  //getAll
  getEstado():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/estado');
  }

  //getEstadobyId
  getEstadobyId(id:number):Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/estado/' + id);
    //return this.httpclient.get<any[]>(this.url + '/estado' + id);
  }

  //createEstado
  addEstado(data:any){
    return this.httpclient.post(this.url + '/estado', data);
  }

  //updateEstado
  updateEstado(id:number|string, data:any){
    //return this.httpclient.put(this.url + '/estado/${id}', data);
    return this.httpclient.put(this.url + '/estado/' + id, data);
  }
  //delete
  deleteEstado(id:number){
    //return this.httpclient.delete(this.url + '/estado/${id}');
    return this.httpclient.delete(this.url + '/estado/' + id);
    //return this.httpclient.delete(this.url + '/estado' + id);
  }
}
