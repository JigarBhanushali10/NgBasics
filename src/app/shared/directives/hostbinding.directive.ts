import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[hostbinding]'
 })
export class HostBindingDirective {

  defaultBgColor = 'black';
  defaultColor = 'white';
  
  @HostBinding() class = 'box';
  // @HostBinding('class') myClass = 'box';

  @HostBinding('style.backgroundColor') bgColor = this.defaultBgColor; 

  @HostListener('mouseenter') onEnter() {
   this.bgColor = 'white';
  }

  @HostListener('mouseleave') onLeave() {
   this.bgColor = this.defaultBgColor;
  } 

  @HostBinding('style.color')
  @Input() color: string;
}