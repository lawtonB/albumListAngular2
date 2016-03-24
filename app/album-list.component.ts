import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { NewAlbumComponent} from './new-album.component';
import {GenrePipe} from './genre.pipe';
import {ArtistPipe} from './artist.pipe';

@Component({
  selector: "album-list",
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [NewAlbumComponent],
  pipes: [GenrePipe, ArtistPipe],
  template: `
  <select (change)="onChangeGenre($event.target.value)">
      <option value="all" selected="selected">All</option>
      <option value="rock">Rock</option>
      <option value="hard-rock">Hard Rock</option>
      <option value="indie">Indie</option>
  </select>
  <select (change)="onChangeArtist($event.target.value)">
      <option value="all" selected="selected">All</option>
      <option value="prince">Prince</option>
      <option value="metallica">Metallica</option>
      <option value="they might be giants">They Might Be Giants</option>
  </select>
  <div *ngFor="#album of albumList | artist: filter | genre: filter"
  (click)="albumClicked(album)"
  [class.selected]='album === selectedAlbum'>
    <h4> {{ album.name }} </h4>
    <h4> {{ album.artist }} </h4>
    <h4> {{ album.price }} </h4>
    <h4> {{ album.genre }} </h4>
  </div>
  <new-album (onSubmitNewAlbum)='createAlbum($event)'></new-album>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filter: string = "all";
  constructor(){
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log("child", clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(tempAlbum: Album): void {
    this.albumList.push(new Album(tempAlbum.name, tempAlbum.artist, tempAlbum.price, tempAlbum.genre, this.albumList.length)
  );
  }
  onChangeGenre(genreOption) {
    this.filter = genreOption
  }
  onChangeArtist(artistOption){
    this.filter = artistOption;
  }
}
