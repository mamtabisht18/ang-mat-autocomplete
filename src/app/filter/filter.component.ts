import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import {FormControl} from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  @Input() filterItems: any[]
  @Output() selectedItemEvent = new EventEmitter()
  @Input() selectedItem: number

  showCloseIcon = false
  @Input() allowClear = true
  myControl = new FormControl();
  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger }) autoComplete: MatAutocompleteTrigger;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(selectedItem){
    this.selectedItemEvent.emit(selectedItem)
  }

  remove(){
    this.myControl.reset()
    this.showCloseIcon = false
    setTimeout(
      ()=>{
        this.autoComplete.openPanel();
      }, 0
    )
  }

  getSelectedItems(item){
    this.showCloseIcon = true
    console.log(item)
  }

}
