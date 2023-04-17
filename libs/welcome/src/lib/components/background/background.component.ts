import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hexa-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnChanges {

  @Input() isDevMode: boolean|undefined;
  @Input() url: string|undefined = undefined;
  imgUrl: string|undefined;

  constructor(
    private el: ElementRef,
    private readonly _renderer: Renderer2  
  ) {}

  async ngOnInit(): Promise<void> {
    this.imgUrl = (Boolean(this.url) === true) 
      ? this.url
      : undefined;
    // check url valid formating
    if (this.imgUrl) {
      try {
        const isUrlValid = new URL(this.imgUrl);
        if (isUrlValid) {
          this.el.nativeElement.style.backgroundImage = `url(${this.imgUrl})`;
        }
      } catch (error) {
        console.log(`[ERROR] {BackgroundComponent} Invalide URL formatting: "${this.imgUrl}"`);
        this.fadeIn();
        throw new Error(`Invalide URL formatting: "${this.imgUrl}"`);
      }
    } 
    this.fadeIn();
  }

  async ngOnChanges(simpleChanges: SimpleChanges): Promise<void> {
    if (!simpleChanges?.['url']) {
      return;
    }
    if (simpleChanges?.['url']?.firstChange) {
      return;
    }
    this._renderer.setStyle(
      this.el.nativeElement, 
      'opacity', 
      0
    );
    this.ngOnInit();
  }

  fadeIn() {
    let opacity = 0;
    const int = setInterval(async () => {
      opacity += 0.01;
      this._renderer.setStyle(
        this.el.nativeElement, 
        'opacity', 
        opacity
      );
      if (opacity >= 1) {
        clearInterval(int);
      }
    }, 3);
  }
}