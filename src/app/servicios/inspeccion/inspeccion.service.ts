import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspeccionService {

  readonly url = 'https://localhost:44366/api';

  constructor(private httpclient: HttpClient) { }

  //getAll
  getInspeccion():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/inspeccion');
  }

  //getInspeccionbyId
  getInspeccionbyId(id:number):Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/inspeccion/' + id);
  }

  //createInspeccion
  addInspeccion(data:any){
    return this.httpclient.post(this.url + '/inspeccion', data);
  }

  //updateInspeccion
  updateInspeccion(id:number|string, data:any){
    return this.httpclient.put(this.url + '/inspeccion/' + id, data);
  }
  //delete
  deleteInspeccion(id:number){
    return this.httpclient.delete(this.url+'/inspeccion/' + id);
  }
}
