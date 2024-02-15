import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre = "Juan";
  apellido = " Díaz";
  edad = 23;
  empresa = "Maan";

  
  /*getEdad(){

    return this.edad;
  }*/
  
  habilitacionCuadro=false;
  usuRegistrado=false;
  textoRegistro = "No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUusuarioRegistrado(event:Event){
    //alert ("El usuario se acaba de registrar");
    //this.textoRegistro="El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="El usuario se acaba de registrar";
    }else{
      this.textoRegistro="No hay nadie registrado";
    }
  }

  constructor (){}
    ngOnInit(): void {

  }
  

}
  