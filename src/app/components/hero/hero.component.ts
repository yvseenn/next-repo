import { Component, Input } from '@angular/core';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input()
  public films!: Media;
}
