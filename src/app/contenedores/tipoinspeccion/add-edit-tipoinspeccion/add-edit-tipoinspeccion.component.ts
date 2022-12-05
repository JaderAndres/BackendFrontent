import { Component, Input } from '@angular/core';

import { TipoinspeccionService } from 'src/app/servicios/tipoinspeccion/tipoinspeccion.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-tipoinspeccion',
  templateUrl: './add-edit-tipoinspeccion.component.html',
  styleUrls: ['./add-edit-tipoinspeccion.component.css']
})

//ESTAN ADICIONAR, ACTUALIZAR Y UN ELIMINAR (no estoy seguro que se utilize).

export class AddEditTipoinspeccionComponent {

  inspectiontypeList$! : Observable<any[]>

  constructor(private inspectionTypeservice: TipoinspeccionService,
    private toastr: ToastrService) {}

    @Input() tipoinspeccion:any;
    id?:number = 0;
    nombre?:string = '';

    ngOnInit(): void{
      this.id = this.tipoinspeccion.id;
      this.nombre = this.tipoinspeccion.nombre;
      this.inspectiontypeList$ = this.inspectionTypeservice.getTipoInspeccion();
      console.log(this.id);
    }

    agregar()
    {
      if(this.nombre != undefined)
      {
      var tipoinspeccion = {
        nombre: this.nombre,
      }
      this.inspectionTypeservice.addTipoInspeccion(tipoinspeccion)
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
          this.toastr.success('Debe ingresar todos los datos!', 'Tipo inspección');
        }
    }

update()
{
  if(this.nombre?.trim() != '')
  {
    var tipoinspeccion = {
    id:this.id,
    nombre: this.nombre
    }

  var a:any = this.id;

  this.inspectionTypeservice.updateTipoInspeccion(a, tipoinspeccion)
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
    this.toastr.success('Debe ingresar todos los datos!', 'Tipo inspección');
  }
}

}
