import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  showLoading():void{
    Swal.fire('Cargando...');
    Swal.showLoading();
  }

  closeLoading():void{
    Swal.close();
  }

  showPopUp(title, message, type):void{
    Swal.close();
    Swal.fire(
      title,
      message,
      type
    )
  }

  showPopUpError(message):void{
    Swal.close();
    Swal.fire(
      'Ops...',
      message,
      'error'
    )
  }

  showPopUpSuc(message):void{
    Swal.close();
    Swal.fire(
      '¡Exito!',
      message,
      'success'
    )
  }

}
