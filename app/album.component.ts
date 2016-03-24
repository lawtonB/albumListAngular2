import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
    selector: 'album-display',
    inputs: ['currentAlbum']
  template: `
  <div>
    <h4> {{ currentAlbum.name }} </h4>
    <h4> {{ currentAlbum.artist }} </h4>
    <h4> {{ currentAlbum.price }} </h4>
    <h4> {{ currentAlbum.genre }} </h4>
  </div>
  `
})

export class AlbumComponent {
  public album: Album;

  toggleCheckout(setState: boolean){
    this.album.checkout = setState;
  }
}
