import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { InspeccionService } from 'src/app/servicios/inspeccion/inspeccion.service';
import { TipoinspeccionService } from 'src/app/servicios/tipoinspeccion/tipoinspeccion.service';

@Component({
  selector: 'app-show-inspeccion',
  templateUrl: './show-inspeccion.component.html',
  styleUrls: ['./show-inspeccion.component.css']
})

export class ShowInspeccionComponent {

  //CONTROLA EL COMPORTAMIENTO DE LOS MODALES, LISTAR

  InspectionList$!: Observable<any[]>
  InspectionTypeList$!: Observable<any[]>
  InspectionTypeList:any=[];

  InspectionTypeMap:Map<number,string> = new Map();
  inspectionEDIT: number = 0;

  constructor(private serviceInspection:InspeccionService,
                private serviceTypeInspection: TipoinspeccionService,
                private toastr: ToastrService) {}

//variable (ventana Modal)
title:string = '';
activateaddeditcomponnetinspection:boolean =false;
inspectiona:any;

  ngOnInit(){
      this.InspectionList$ = this.serviceInspection.getInspeccion();
      this.InspectionTypeList$ = this.serviceTypeInspection.getTipoInspeccion();
      this.refreshInspectionTypeList();
    }

    //
    refreshInspectionTypeList()
    {
      this.serviceTypeInspection.getTipoInspeccion().subscribe (data =>{
        this.InspectionTypeList = data;

        for(let i=0; i < data.length; i++){
          this.InspectionTypeMap.set(this.InspectionTypeList[i].id,
          this.InspectionTypeList[i].nombre
            );
        }
      });
    }
    //

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
      this.InspectionList$ = this.serviceInspection.getInspeccion();
    }

    modalEdit(item:any){
      this.inspectiona = item;
      this.title = 'Actualizar';
      this.activateaddeditcomponnetinspection = true
      }

      delete(item:any){
        if(confirm('Esta seguro que desea borar este registro con Id ' + item.id + '?')){
        this.serviceInspection.deleteInspeccion(item.id).subscribe(res=>{
          var closeModal = document.getElementById('add-edit-modal-close');
            if(closeModal){
              closeModal.click();
            }
            /* var showDeleteSuccess = document.getElementById('delete-success-alert');
            if(showDeleteSuccess){
              showDeleteSuccess.style.display = 'block';
            }
            setTimeout(function(){
              if(showDeleteSuccess){
                showDeleteSuccess.style.display = 'none';
               location.reload();
              }
            },4000)*/
        })
        this.InspectionList$ = this.serviceInspection.getInspeccion();
        this.toastr.success('Refresque para ver la lista actualizada!', 'Registro eliminado');
        }
        }
}
