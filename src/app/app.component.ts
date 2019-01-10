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


}
