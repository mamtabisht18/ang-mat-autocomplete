import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent{
  @Input() filterItems: any[]
  @Input() selectedItem: any
  @Input() allowClear = true
  @Output() selectedItemEvent = new EventEmitter()

  showCloseIcon = false
  myControl = new FormControl();
  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger }) autoComplete: MatAutocompleteTrigger;
  
  remove(){
    this.myControl.reset()
    this.showCloseIcon = false
    setTimeout(
      ()=>{
        this.autoComplete.openPanel();
        this.selectedItem = ''
        this.selectedItemEvent.emit('')
      }, 0
    )
  }

  getSelectedItems(item){
    this.showCloseIcon = true
    this.selectedItem = item
    this.selectedItemEvent.emit(item)
  }

}
