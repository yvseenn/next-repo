import { Component, Input } from '@angular/core';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  console=console;
  @Input()
  public films!: Media;

}
