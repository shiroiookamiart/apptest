import { Component  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arrayData = [
    {"name":"Jose", "tel": "0421-XXX-XX-XX", "par":"Hermano"},
    {"name":"Daniela", "tel": "0441-XXX-XX-XX", "par": "Prima"},
    {"name":"Oscar", "tel": "0412-XXX-XX-XX", "par": "Amigo"},
    {"name":"Lucia", "tel": "0212-XXX-XX-XX", "par": "Novia"}
  ] //se agrega una variable donde almacenaremos los datos

  isModalOpen = false;

  contactos: FormGroup;

  alertBtn = ['Aceptar'];
  isAlertOpen = false

  constructor(fb:FormBuilder){
    this.contactos = fb.group({ //se crean los elementos para formulario
      name: new FormControl(""),
      tel: new FormControl(""),
      par: new FormControl("")
    })
  }

  createNewContact(){ //se validan y almacenan los elementos en el array
    var name = this.contactos.value.name;
    var tel = this.contactos.value.tel;
    var par = this.contactos.value.par;
    if(name != "" && tel != "" && par != ""){
      this.arrayData.push({"name": name, "tel":tel, "par":par}); 
      this.setOpen(false)
    }else{
      this.setOpenAlert(true)
    }
  }

  setOpenAlert(isOpen: boolean) { //validacion para cerrar y abrir alert
    this.isAlertOpen = isOpen;
  }

  setOpen(isOpen: boolean) { //validacion para cerrar y abrir formulario
    this.isModalOpen = isOpen;
  }
}
