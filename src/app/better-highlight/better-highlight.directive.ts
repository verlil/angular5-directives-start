import { Directive, Renderer2, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColorMyProperty: string = 'transparent';
  //transparent - is initial color

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
  }

  @HostListener('mouseenter') mouseoverMyFunc(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColorMyProperty = 'blue';
  }

  @HostListener('mouseleave') mouseleaveMyFunc(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    this.backgroundColorMyProperty = 'purple';
  }
}
