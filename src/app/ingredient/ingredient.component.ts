import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: {name: string, amount: number};
  @Input() index: number;
  @Input() active = false;
  @Output() indexOfHighlight = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.indexOfHighlight.emit(this.index);
  }

}
