import { Component } from '@angular/core';
import { Media } from './interfaces/media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

    public anime:Media = {
      section:'ANIME',
      films: [
        {
          title:'AJIN',
          src:'../assets/images/Anime/ajin.jpg',
          alt:'lskjd'
        },
        {
          title:'CHIHIRO',
          src:'../assets/images/Anime/chihiro.webp',
          alt:'lskjd'
          
        },
        {
          title:'MONONOKE',
          src:'../assets/images/Anime/mononoke.webp',
          alt:'lskjd'
        },
        {
          title:'PERFECT BLUE',
          src:'../assets/images/Anime/perfectblue.webp',
          alt:'lskjd'
        },
        {
          title:'NINOKUNI',
          src:'../assets/images/Anime/ninokuni.jpg',
          alt:'lskjd'
          
        },
        {
          title:'EL CASTILLO AMBULANTE',
          src:'../assets/images/Anime/castilloambulante.webp',
          alt:'lskjd'
        },
        {
          title:'ARISE',
          src:'../assets/images/Anime/gitsarise.webp',
          alt:'lskjd'
        },

      ]
    }

    public accion:Media = {
      section:'ACTION',
      films: [
        {
          title:'ejercito de los muertos',
          src:'../assets/images/Accion/ejercitomuertos.jpg',
          alt:'lskjd'
        },
        {
          title:'El Protector',
          src:'../assets/images/Accion/elprotector.webp',
          alt:'lskjd'
          
        },
        {
          title:'Equalizer 2',
          src:'../assets/images/Accion/equalizer2.webp',
          alt:'lskjd'
        },
        {
          title:'HEAT',
          src:'../assets/images/Accion/heat.webp',
          alt:'lskjd'
        },
        {
          title:'JOHN WHICK 2',
          src:'../assets/images/Accion/johnwick2.webp',
          alt:'lskjd'
          
        },
        {
          title:'WORLD WAR Z',
          src:'../assets/images/Accion/worldwarz.webp',
          alt:'lskjd'
        },
        {
          title:'MISSION IMPOSSIBLE 2 ',
          src:'../assets/images/Accion/misionimposiblenacion.webp',
          alt:'lskjd'
        },

      ]
    }
    public top:Media = {
      section:'TOP MOVIES',
      films: [
        {
          title:'LA CASA DE PAPEL',
          src:'../assets/images/Top10/1-papel.webp',
          alt:'lskjd'
        },
        {
          title:'LA REINA DEL FLOW',
          src:'../assets/images/Top10/2-reina.webp',
          alt:'lskjd'
          
        },
        {
          title:'TITANES',
          src:'../assets/images/Top10/3-titanes.webp',
          alt:'lskjd'
        },
        {
          title:'LOST IN SPACE',
          src:'../assets/images/Top10/4-lostinspace.webp',
          alt:'lskjd'
        },
        {
          title:'DONDE CABEN DOS',
          src:'../assets/images/Top10/5-dondecaben.webp',
          alt:'lskjd'
          
        },
        {
          title:'AQUI NO HAY QUIEN VIVA',
          src:'../assets/images/Top10/6-aquinohay.webp',
          alt:'lskjd'
        },
        {
          title:'BLACKLIST',
          src:'../assets/images/Top10/7-blacklist.webp',
          alt:'lskjd'
        },
        {
          title:'RICOS Y MIMADOS',
          src:'../assets/images/Top10/8-ricos.webp',
          alt:'lskjd'
        },
        {
          title:'EL PODER DEL PERRO',
          src:'../assets/images/Top10/9-poder.webp',
          alt:'lskjd'
        },
        {
          title:'THE GOOD DOCTOR',
          src:'../assets/images/Top10/10-gooddoctor.webp',
          alt:'lskjd'
        },

      ]
    }

  
    public drama:Media = {
      section:'DRAMA',
      films: [
        {
          title:'1917',
          src:'../assets/images/Drama/1917.webp',
          alt:'lskjd'
        },
        {
          title:'ARRIVAL',
          src:'../assets/images/Drama/arrival.webp',
          alt:'lskjd'
          
        },
        {
          title:'EL CLUB DE LA LUCHA',
          src:'../assets/images/Drama/clublucha.webp',
          alt:'lskjd'
        },
        {
          title:'CORAZONES DE ACERO',
          src:'../assets/images/Drama/corazones.webp',
          alt:'lskjd'
        },
        {
          title:'CULPABLE',
          src:'../assets/images/Drama/culpable.jpg',
          alt:'lskjd'
          
        },
        {
          title:'LA MILLA VERDE',
          src:'../assets/images/Drama/millaverde.webp',
          alt:'lskjd'
        },
        {
          title:'LA LISTA DE SCHINDLER',
          src:'../assets/images/Drama/schindler.webp',
          alt:'lskjd'
        },
      ]
    }

    public comedy:Media = {
      section:'COMEDY',
      films: [
        {
          title:'CASI 300',
          src:'../assets/images/Comedia/casi300.webp',
          alt:'lskjd'
        },
        {
          title:'lOS CAZA FANTASMAS',
          src:'../assets/images/Comedia/cazafantasmas.webp',
          alt:'lskjd'
          
        },
        {
          title:'EL DICTADOR',
          src:'../assets/images/Comedia/dictador.webp',
          alt:'lskjd'
        },
        {
          title:'SCARY MOVIE 3',
          src:'../assets/images/Comedia/scarymovie3.webp',
          alt:'lskjd'
        },
        {
          title:'TED 2',
          src:'../assets/images/Comedia/ted2.webp',
          alt:'lskjd'
          
        },
        {
          title:'RICK AND MORTY',
          src:'../assets/images/Comedia/rickandmorty.webp',
          alt:'lskjd'
        },
        {
          title:'ERASE UNA VEZ EN HOLLYWOOD',
          src:'../assets/images/Comedia/erasehollywood.webp',
          alt:'lskjd'
        },
        {
          title:'LA TERMINAL',
          src:'../assets/images/Comedia/laterminal.webp',
          alt:'lskjd'
        },
        {
          title:'FAMILY GUY',
          src:'../assets/images/Comedia/family guy.webp',
          alt:'lskjd'
        },

      ]
    }
}
