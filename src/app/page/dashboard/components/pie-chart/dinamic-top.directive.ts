import { AfterViewChecked, AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDinamicTop]'
})
export class DinamicTopDirective implements AfterViewChecked{

  element!:ElementRef;
  constructor(private el: ElementRef)  {
    this.element = el;
   }
  ngAfterViewChecked(): void {
    let w = this.element.nativeElement.parentNode.offsetWidth;
    let h = this.element.nativeElement.parentNode.offsetHeight;
    console.log( "DinamicTop",w, h);
    //200 è l'altezza del pie chart impostato dall'esterno. Se cambia l'altezza devi cambiare questo valore
    let top = (h-200)/2;
    console.log( "top",top);
    this.element.nativeElement.style.top =top+'px';
  }

   setHeight(el:ElementRef){

   }
}   
