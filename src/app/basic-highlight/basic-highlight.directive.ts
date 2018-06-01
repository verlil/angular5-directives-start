import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'//square brackets mean that this wil be an attribute selector
})

export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}// 'private' - is a shortcut,
  //it automaticly creates a property and assign to it data that was sent
  //to the constructor

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
