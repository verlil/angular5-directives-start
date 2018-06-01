import { Directive, Renderer2, ElementRef, HostListener, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() hilightColor: string = 'blue';
  @Input() visitedColor: string = 'purple';
  @HostBinding('style.backgroundColor') backgroundColorMyProperty: string;
  //transparent - is initial color

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColorMyProperty = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
  }

  @HostListener('mouseenter') mouseoverMyFunc(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColorMyProperty = this.hilightColor;
  }

  @HostListener('mouseleave') mouseleaveMyFunc(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    this.backgroundColorMyProperty = this.visitedColor;
  }
}
