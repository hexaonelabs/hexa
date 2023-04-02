import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hexa-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnChanges {

  @Input() clientId: string|undefined;
  @Input() isDevMode: boolean|undefined;
  @Input() query: string|undefined = undefined;
  @Input() url: string|undefined = undefined;
  imgUrl: string|undefined;

  constructor(
    private el: ElementRef,
    private readonly _renderer: Renderer2  
  ) {}

  async ngOnInit(): Promise<void> {
    this.imgUrl = (Boolean(this.url) === true) 
      ? this.url
      : await this.getBackgroundImageFromUnsplashAPI()
        .catch(error => {
          this.fadeIn();
          return undefined;
        });
    if (this.imgUrl) {
      this.el.nativeElement.style.backgroundImage = `url(${this.imgUrl})`;
    } 
    this.fadeIn();
  }

  async ngOnChanges(simpleChanges: SimpleChanges): Promise<void> {
    if (simpleChanges?.['query']?.firstChange) {
      return;
    }
    this._renderer.setStyle(
      this.el.nativeElement, 
      'opacity', 
      0
    );
    this.ngOnInit();
  }

  async getBackgroundImageFromUnsplashAPI(): Promise<string|undefined> {
    // check if client id is provided
    if (!this.clientId) {
      return undefined;
    }
    if (this.isDevMode){
      return `https://images.unsplash.com/photo-1506034861661-ad49bbcf7198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjEyfDB8MXxyYW5kb218fHx8fHx8fHwxNjcwODI5OTYx&ixlib=rb-4.0.3&q=80&w=1080`;
    }
    const query = this.query !== undefined && this.query.length > 0 ? '&query=' + this.query : '';
    const json = await fetch(`https://api.unsplash.com/photos/random?client_id=${this.clientId}${query}`)
      .then(response => response.json())
      .catch(error => {
        console.log(error);
        throw new Error('api not available');
      });
    return json?.urls?.regular;
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