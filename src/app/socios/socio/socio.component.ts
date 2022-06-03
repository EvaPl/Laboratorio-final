import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Socio } from './../../interfaces/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})

export class SocioComponent implements OnInit {
  do: String = "insert"
  position: any = 0

  contacts: Array<Socio> = []

  contact: Socio = {
        name: "",
        surnames: "",
        age:"",
        socio: "",
        dni: "",
        teléfono: "",
        sex: ""
  }


  constructor() { }

  ngOnInit(): void {
  }

  add( form : NgForm ){
    if( this.do === 'insert' ){

      let ageNum = parseInt(this.contact.age)
      let name = this.contact.name;
      let surnames = this.contact.surnames;
      let dni = this.contact.dni;
      let teléfono = this.contact.telef;
      let socioNum = this.contact.numsocio;





    if(ageNum > 0 && ageNum <= 125){
      this.contacts.push( this.contact )
      }

    this.contact = {
      name: "",
      surnames: "",
      age: "",
      socio: "",
      dni: "",
      teléfono: "",
      sex: ""
    }

  }else{
    this.contacts[ this.position ] = this.contact
    this.do = 'insert'
  }
  form.resetForm()
}

  delete( delPosition : number )    : void {
    this.contacts.splice( delPosition , 1 )
  }
  update( upPosition : number ) : void {
    this.contact  = this.contacts[ upPosition ];
    this.do   = 'update'
    this.position = upPosition
  }

}
