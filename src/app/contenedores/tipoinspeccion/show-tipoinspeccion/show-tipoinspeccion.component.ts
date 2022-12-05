import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { TipoinspeccionService } from 'src/app/servicios/tipoinspeccion/tipoinspeccion.service';

@Component({
  selector: 'app-show-tipoinspeccion',
  templateUrl: './show-tipoinspeccion.component.html',
  styleUrls: ['./show-tipoinspeccion.component.css']
})
export class ShowTipoinspeccionComponent {

  //CONTROLA EL COMPORTAMIENTO DE LOS MODALES, LISTAR

  InspectionTypeList$!: Observable<any[]>
  // InspectionTypeListAAAAAAAAAA:any=[];

  constructor(private serviceTypeInspection: TipoinspeccionService,
    private toastr: ToastrService) {}

//variable (ventana Modal)
title:string = '';
activateaddeditcomponnetinspection:boolean =false;
inspectiona:any;

ngOnInit(){
  this.InspectionTypeList$ = this.serviceTypeInspection.getTipoInspeccion();
  // this.refreshInspectionTypeList();
}

modalAdd(){
  this.inspectiona ={
    id:0,
    estado:null,
    comentarios:null,
    tipoInspeccionId:null
  }
  this.title = 'Adicionar';
  this.activateaddeditcomponnetinspection=true;

}

modalclose(){
  this.activateaddeditcomponnetinspection = false;
  this.InspectionTypeList$ = this.serviceTypeInspection.getTipoInspeccion();
}

modalEdit(item:any){
  this.inspectiona = item;
  this.title = 'Actualizar';
  this.activateaddeditcomponnetinspection = true
  }


delete(item:any){
  if(confirm('Esta seguro que desea borar este registro con Id ' + item.id + '?')){
  this.serviceTypeInspection.deleteTipoInspeccion(item.id).subscribe(res=>{
    var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
  })
  this.InspectionTypeList$ = this.serviceTypeInspection.getTipoInspeccion();
  this.toastr.success('Refresque para ver la lista actualizada!', 'Registro eliminado');
  }
}

}
