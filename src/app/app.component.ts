import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  selectedItem = ''
  filterItems = [
    {id:1 , name: 'AU Finance Bank'},
    {id:2 , name: 'Ujjivan Finance Bank'},
    {id:3 , name: 'SBI Card'},
    {id:4 , name: 'ICICI Bank'},
    {id:5 , name: 'Axis Bank'},
    {id:6 , name: 'Allahabaad bank'},
    {id:7 , name: 'Canara Bank'},
  ]

  selectedItemEvent(value){
    this.selectedItem = value
  }
}
