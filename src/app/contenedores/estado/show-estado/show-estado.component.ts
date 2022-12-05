import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { EstadoService } from 'src/app/servicios/estado/estado.service'

@Component({
  selector: 'app-show-estado',
  templateUrl: './show-estado.component.html',
  styleUrls: ['./show-estado.component.css']
})
export class ShowEstadoComponent {

   //CONTROLA EL COMPORTAMIENTO DE LOS MODALES, LISTAR

  EstadoList$!: Observable<any[]>;

 constructor(private serviceEstado:EstadoService, private toastr: ToastrService) {}

 //variable (ventana Modal)
title:string = '';
activateaddeditcomponnetinspection:boolean =false;
inspectiona:any;

  ngOnInit(){
    this.EstadoList$ = this.serviceEstado.getEstado();
  }

  modalAdd(){
    this.inspectiona ={
      id:0,
      opcionestado:null
    }
    this.title = 'Adicionar';
    this.activateaddeditcomponnetinspection=true;

  }

  modalclose(){
    this.activateaddeditcomponnetinspection = false;
    this.EstadoList$ = this.serviceEstado.getEstado();
  }

  modalEdit(item:any){
    this.inspectiona = item;
    this.title = 'Actualizar';
    this.activateaddeditcomponnetinspection = true
    }

    delete(item:any){
      if(confirm('Esta seguro que desea borar este registro con Id ' + item.id + '?')){
      this.serviceEstado.deleteEstado(item.id).subscribe(res=>{
        var closeModal = document.getElementById('add-edit-modal-close');
          if(closeModal){
            closeModal.click();
          }
      })
      this.EstadoList$ = this.serviceEstado.getEstado();
      this.toastr.success('Refresque para ver la lista actualizada!', 'Registro eliminado');
      }
      }

}
