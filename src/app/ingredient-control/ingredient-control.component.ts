import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, DoCheck, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ingredient-control',
  templateUrl: './ingredient-control.component.html',
  styleUrls: ['./ingredient-control.component.css']
})
export class IngredientControlComponent implements OnInit, DoCheck {

  constructor( private renderer: Renderer2) { }

  private ingredient: {name: string, amount: number} = null;
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('deleteButton') deleteButton: ElementRef;
  @ViewChild('editButton') editButton: ElementRef;
  @ViewChild('addButton') addButton: ElementRef;
  @ViewChild('nameWarning') nameWarning: ElementRef;
  @ViewChild('amountWarning') amountWarning: ElementRef;
  @Output('indexToChange') emitIndexToChange = new EventEmitter<string>();
  @Output('ingredientToEdit') emitIngredientToEdit = new EventEmitter<{name: string, amount: number}>();
  @Input() index: number;
  @Input('ingredient') set setIngredient(value: {name: string, amount: number}) {
    this.ingredient = value;
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
    this.editing = false;
  }
  editing: boolean;
  nameFieldValid = true;
  amountFieldValid = true;


  ngOnInit() { }

  ngDoCheck() {
    if(this.ingredient) {
      this.deleteButton.nativeElement.disabled = false;
      this.editButton.nativeElement.disabled = false;
    }
    if(!this.editing && this.index === null) {
      this.deleteButton.nativeElement.disabled = true;
      this.editButton.nativeElement.disabled = true;
    }
  }

  setValues() {
    if(!this.editing) {
      this.name.nativeElement.value = this.ingredient.name;
      this.amount.nativeElement.value = this.ingredient.amount;
      this.editing = true;
    } else {
      this.validateFields();
      if (this.nameFieldValid && this.amountFieldValid) {
        this.emitIngredientToEdit.emit({
          name: this.name.nativeElement.value,
          amount: this.amount.nativeElement.value,
        });
      }
    }
  }

  deleteIngredient() {
    if (confirm('Are you sure you want to delete this ingredient?')) {
      this.emitIndexToChange.emit('delete');
    }
  }

  createNewValues() {
    this.editing = !this.editing && true;
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
    this.emitIndexToChange.emit('unselect');

  }

  validateFields() {
    if (this.name.nativeElement.value.trim() === '') {
      this.nameFieldValid = false;
      this.renderer.removeClass(this.nameWarning.nativeElement, 'hidden');
      this.name.nativeElement.value = '';
    } else {
      this.nameFieldValid = true;
      this.renderer.addClass(this.nameWarning.nativeElement, 'hidden');
    }

    if (this.amount.nativeElement.value.trim() === '') {
      this.amountFieldValid = false;
      this.renderer.removeClass(this.amountWarning.nativeElement, 'hidden');
    } else {
      this.amountFieldValid = true;
      this.renderer.addClass(this.amountWarning.nativeElement, 'hidden');
    }
  }


}

