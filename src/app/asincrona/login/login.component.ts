import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user="";
  password="";
  email="@test";
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  urlRedireccion ="";

  login(){
    if(this.user=="test" && this.password=="test"){
      this.autenticacion.login();
    this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '';
    this.router.navigate([this.urlRedireccion]);
    }else{
      alert("contraseña o usuario no valido")
      this.user="";
      this.password=""
    }
  }
}
