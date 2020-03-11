import { UiService } from './../../services/common/ui.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private uiService: UiService) { }


  formRegi = new FormGroup({
    nombre : new FormControl('', Validators.required),
    edad : new FormControl('', Validators.required),
    correo : new FormControl('', Validators.required),
    usuario : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  });


  ngOnInit(): void {
    
  }

  registerUser(dataForm):void{
    if(this.formRegi.invalid){
      this.uiService.showPopUpError('Parece que hay problemas con algunos campos');
    }else{
      this.uiService.showLoading();
      this.authservice.register(dataForm.value).subscribe(
        (res) => {
          this.uiService.showPopUpSuc('Ya puedes iniciar sesion con tu usuario y contraseña');
          this.router.navigateByUrl('/auth/login');
        },
        (err) => {
          console.log(err);
          this.uiService.showPopUpError('No se pudo realizar el registro');
        }
      )
    }
  }

  backLogin(): void{
    this.router.navigateByUrl('/auth/login');
  }

}
