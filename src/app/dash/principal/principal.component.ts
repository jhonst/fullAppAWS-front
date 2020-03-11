import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {

  nombre : String = "adf";

  constructor() { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("NOMBRE");
  }

}
