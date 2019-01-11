import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-test';

  @ViewChild('inputElement') inputEl: ElementRef;
  filterLetters = '';
  activeItem: number;

  ingredients = [
    {name: 'Bread', amount: 3},
    {name: 'Carrot', amount: 2},
    {name: 'Potato', amount: 1},
    {name: 'Tomato', amount: 6},
    {name: 'Wine', amount: 2}
  ];

  onInputChange() {
    this.filterLetters = this.inputEl.nativeElement.value;
  }

  setIndex(index: number) {
    this.activeItem = index;
  }

  changeIngredient(action: string) {
    if(action === 'delete' && this.activeItem !== null) {
      this.ingredients.splice(this.activeItem, 1);
    } else if (action === 'unselect') {
      this.activeItem = null;
    }
  }

  editOrCreateIngredient(ingredient:{name: string, amount: number}) {
    if(this.activeItem !== null) {
      this.ingredients[this.activeItem] = ingredient;
    } else {
      this.ingredients.push(ingredient)
    }
    
  }

}
