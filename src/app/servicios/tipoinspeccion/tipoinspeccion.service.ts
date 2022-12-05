import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoinspeccionService {

  readonly url = 'https://localhost:44366/api';

  constructor(private httpclient: HttpClient) { }

  //getAll
  getTipoInspeccion():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/tipoinspeccion');
  }

  //getInspecciobyId
  getTipoInspeccionbyId(id:number):Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/tipoinspeccion/' + id);
  }

  //createInspeccion
  addTipoInspeccion(data:any){
    return this.httpclient.post(this.url+'/tipoinspeccion', data);
  }

  //updateInspeccion
  updateTipoInspeccion(id:number|string,data:any){
    return this.httpclient.put(this.url + '/tipoinspeccion/' + id, data);
  }
  //delete
  deleteTipoInspeccion(id:number){
    return this.httpclient.delete(this.url + '/tipoinspeccion/' + id);
  }
}
