import { Component,Input } from '@angular/core';
import { EstadoService } from 'src/app/servicios/estado/estado.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-estado',
  templateUrl: './add-edit-estado.component.html',
  styleUrls: ['./add-edit-estado.component.css']
})

//ESTAN ADICIONAR, ACTUALIZAR Y UN ELIMINAR (no estoy seguro que se utilize).

export class AddEditEstadoComponent {

  estado$! : Observable<any[]>

  constructor(private estadoervices:EstadoService, private toastr: ToastrService) {}


@Input() estado:any;
id?:number = 0;
opcionestado?:string = '';

ngOnInit(): void{
  this.id = this.estado.id;
  this.opcionestado = this.estado.opcionestado;
}


agregar()
{
  if(this.opcionestado != undefined)
  {
  var estado = {
    opcionestado: this.opcionestado
  }
  this.estadoervices.addEstado(estado)
  .subscribe(res => {
                      var closeModal = document.getElementById('add-edit-modal-close');
                      if(closeModal)
                      {
                        closeModal.click();
                      }
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
  if(this.opcionestado?.trim() != '' )
  {
  var estado = {
    id:this.id,
    opcionestado: this.opcionestado
  }

  var a:any = this.id;
  this.estadoervices.updateEstado(a, estado)
  .subscribe(res => {
            var closeModal = document.getElementById('add-edit-modal-close');
            if(closeModal)
            {
              closeModal.click();
            }
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
    this.estadoervices.deleteEstado(item.id).subscribe(res=>{
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
