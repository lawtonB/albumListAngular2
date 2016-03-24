import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template:`
  <div class="container">
  <h1>Music Store</h1>
  <album-list
    [albumList] = "albums"
    (onAlbumSelect)="albumWasSelected($event)">
  </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("sign of the times", "prince", 10.99, "rock", 0),
      new Album("master of puppets", "metallica", 8.99, "hard-rock", 1),
      new Album("flood", "they might be giants", 6.99, "indie", 2)
    ];
  }

  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
