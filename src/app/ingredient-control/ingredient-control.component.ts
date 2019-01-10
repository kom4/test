import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ingredient-control',
  templateUrl: './ingredient-control.component.html',
  styleUrls: ['./ingredient-control.component.css']
})
export class IngredientControlComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }

  private ingredient: {name: string, amount: number} = null;
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('deleteButton') deleteButton: ElementRef;
  @ViewChild('editButton') editButton: ElementRef;
  @Output('indexToDelete') emitTndexToDelete = new EventEmitter<number>();
  @Input() index: number;
  @Input('ingredient') set setIngredient(value: {name: string, amount: number}) {
    this.ingredient = value;
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
    this.editing = false;
    this.enableDelete = true;
  }
  editing = false;
  nameFieldValid = true;
  amountFieldValid = true;
  enableDelete = false;

  ngOnInit() {
  }

  ngDoCheck() {    
    if(this.ingredient) {
      this.deleteButton.nativeElement.disabled = false;
      this.editButton.nativeElement.disabled = false;
    }
  }


  setValues() {     
    if(!this.editing) {
      this.name.nativeElement.value = this.ingredient.name;
      this.amount.nativeElement.value = this.ingredient.amount;
      this.editing = true;    
    } else {
      this.validateFields();
      
    }
  }

  deleteIngredient() {
    if (confirm('Are you sure you want to delete this ingredient?')) {
      this.emitTndexToDelete.emit(this.index)
    }
  }

  validateFields() {
    if(this.name.nativeElement.value === '') {
      this.nameFieldValid = false;
    }
    if(this.amount.nativeElement.value === '' || this.amount.nativeElement.value === 0) {
      this.amountFieldValid = false;
    }
  }
  

}
