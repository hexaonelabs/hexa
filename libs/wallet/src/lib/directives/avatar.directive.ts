import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[avatar]",
})
export class AvatarDirective implements AfterViewInit {

  @Input() address!: string;
  @Input() size?: number;

  constructor(
    private ref: ElementRef,
    private renderer:Renderer2,
  ) { 

  }

  async ngAfterViewInit() {
    const size = this.size || 32;
    const el = this.ref.nativeElement as HTMLElement;
    // build element with jazzicon
    const jazzicon = await import('jazzicon-ts').then(m => m.default);
    const addr = this.address.slice(2, 10);
    const value = jazzicon(size, parseInt(addr, 16));
    // add to dom
    this.renderer.appendChild(el, value);
    // set styles
    this.renderer.setStyle(el, 'display', 'flex');
    this.renderer.setStyle(el, 'align-items', 'center');
    this.renderer.setStyle(el, 'min-height', `${size}px`);
    this.renderer.setStyle(el, 'min-width', `${size}px`);
    this.renderer.setStyle(el, 'border-color', 'transparent');
    this.renderer.setStyle(el, 'border-width', '2px');
    this.renderer.setStyle(el, 'border-style', 'solid');
  }
}