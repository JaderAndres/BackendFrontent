import { Component,Input } from '@angular/core';
import { InspeccionService } from 'src/app/servicios/inspeccion/inspeccion.service';
import { EstadoService } from 'src/app/servicios/estado/estado.service';
import { TipoinspeccionService } from 'src/app/servicios/tipoinspeccion/tipoinspeccion.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-inspeccion',
  templateUrl: './add-edit-inspeccion.component.html',
  styleUrls: ['./add-edit-inspeccion.component.css']
})

//ESTAN ADICIONAR, ACTUALIZAR Y UN ELIMINAR (no estoy seguro que se utilize).

export class AddEditInspeccionComponent {

  inspectionList$! :Observable<any[]>;
  statusList$! : Observable<any[]>
  inspectiontypeList$! : Observable<any[]>

  constructor(private inspectionservice:InspeccionService,
    private statusservices:EstadoService,
    private inspectionTypeservice: TipoinspeccionService,
    private toastr: ToastrService) {}

@Input() inspeccion:any;
id?:number = 0;
estado?:string = '';
comentarios?:string = '';
tipoInspeccionId?:number;

ngOnInit(): void{
  this.id = this.inspeccion.id;
  this.estado = this.inspeccion.estado;
  this.comentarios = this.inspeccion.comentarios;
  this.tipoInspeccionId = this.inspeccion.tipoInspeccionId;
  this.statusList$ = this.statusservices.getEstado();
  this.inspectionList$ = this.inspectionservice.getInspeccion ();
  this.inspectiontypeList$ = this.inspectionTypeservice.getTipoInspeccion();
  console.log(this.id);
}

agregar()
{
  if(this.comentarios != undefined && this.estado != undefined && this.tipoInspeccionId != undefined)
  {
  var inspection = {
    estado: this.estado,
    comentarios: this.comentarios,
    tipoInspeccionId: this.tipoInspeccionId
  }
  this.inspectionservice.addInspeccion(inspection)
  .subscribe(res => {
                      var closeModal = document.getElementById('add-edit-modal-close');
                      if(closeModal)
                      {
                        closeModal.click();
                      }
                      /* var showAddSuccess = document.getElementById('add-success-alert');
                      if(showAddSuccess)
                      {
                        showAddSuccess.style.display = 'block';
                      }
                      setTimeout(function()
                          {
                            if(showAddSuccess)
                            {
                              showAddSuccess.style.display = 'none';
                            }
                          },4000)*/
                    });

                    this.toastr.success('Cierre la ventana para refrescar la lista!', 'Registro adicionado');
    }
    else
    {
      this.toastr.success('Debe ingresar todos los datos!', 'Inspección');
    }
}

update()
{
  if(this.comentarios?.trim() != '' && this.estado?.trim() != '' && this.tipoInspeccionId != 0)
  {
  var inspection = {
    id:this.id,
    estado: this.estado,
    comentarios: this.comentarios,
    tipoInspeccionId: this.tipoInspeccionId
  }

  var a:any = this.id;
  //
  //let id:number=Number(a);
  //this.inspectionservice.updateInspeccion(id,inspection)
  //
  this.inspectionservice.updateInspeccion(a,inspection)
  .subscribe(res => {
            var closeModal = document.getElementById('add-edit-modal-close');
            if(closeModal)
            {
              closeModal.click();
            }
            /* var showUpdateSuccess = document.getElementById('update-success-alert');
            if(showUpdateSuccess)
            {
              showUpdateSuccess.style.display = 'block';
            }
            setTimeout(function()
                  {
                    if(showUpdateSuccess)
                    {
                      showUpdateSuccess.style.display = 'none';
                      location.reload();
                    }
                  },4000)*/
          });

          this.toastr.success('Cierre la ventana para refrescar la lista!', 'Registro actualizado');
  }
  else
  {
    this.toastr.success('Debe ingresar todos los datos!', 'Inspección');
  }
}

delete(item:any)
{
  if(confirm('BORRAR? ' + item.id))
  {
    this.inspectionservice.deleteInspeccion(item.id).subscribe(res=>{
        var closeModal = document.getElementById('add-edit-modal-close');
        if(closeModal)
        {
          closeModal.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess)
        {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function()
            {
              if(showDeleteSuccess)
              {
                showDeleteSuccess.style.display = 'none';
              location.reload();
              }
            },4000)
    })
  }
}

}
