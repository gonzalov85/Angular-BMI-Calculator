import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo="Masculino";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any) {
     this.altura = event.target.value;
  }

  masculino(){
    this.sexo="Masculino"
  }

  femenino(){
    this.sexo="Femenino"
  }

  calcularBMI(){
      const bmi = this.peso / Math.pow((this.altura / 100),2);
      this.router.navigate(['/resultado', bmi.toFixed(1)]);
  }

  restaPeso(){
    if(this.peso.toString() != "1"){
      this.peso -=1;
    } else {
      this.peso = 1;
    }
  }

  sumaPeso(){
  this.peso +=1;
  }

  restaEdad(){
    if(this.edad.toString() != "1"){
      this.edad -=1;
    } else {
      this.edad = 1;
    }
  }

  sumaEdad(){
  this.edad +=1;
  }
}


