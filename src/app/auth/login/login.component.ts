import { UiService } from './../../services/common/ui.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorUser = true;
  constructor(private authservice: AuthService, private router: Router, private uiService: UiService) { }

  ngOnInit(): void {
  }

  onLogin(dataForm):void{
    this.uiService.showLoading();
    this.authservice.login(dataForm.value).subscribe(
    (res) => {
      this.uiService.closeLoading();
      this.router.navigateByUrl('/auth');
      this.errorUser = true;
    },
    (err) => {
      this.uiService.closeLoading();
      console.log(err);
      this.errorUser = false;
    }
    )
  }

  goToRegister() : void{
    this.router.navigateByUrl('/auth/register');
  }
}
