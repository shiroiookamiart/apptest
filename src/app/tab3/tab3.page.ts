import { Component } from '@angular/core';

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
  ]

  constructor() {}

}
