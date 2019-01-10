import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterDirective } from './filter.directive';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientControlComponent } from './ingredient-control/ingredient-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterDirective,
    IngredientComponent,
    IngredientControlComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
