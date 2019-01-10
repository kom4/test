import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFilter]'
})
export class FilterDirective {

  @Input() appFilterIngredient;
  @Input('appFilter') set letters (value: string) {
    // console.log(this.appFilterIngredient.toLowerCase().startsWith(value));


    if (value.trim() === '') {
      this.vcrRef.clear();
      this.vcrRef.createEmbeddedView(this.template);
    } else if (this.appFilterIngredient.toLowerCase().startsWith(value.trim())) {
      this.vcrRef.clear();
      this.vcrRef.createEmbeddedView(this.template);
    } else {
      this.vcrRef.clear();
    }
  }

  constructor(private template: TemplateRef<any>, private vcrRef: ViewContainerRef) { }

}
