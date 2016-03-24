import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { NewAlbumComponent} from './new-album.component';
import { AlbumComponent} from './album.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CheckoutPipe } from './checkout.pipe';

@Component({
  selector: "album-list",
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [NewAlbumComponent, AlbumComponent],
  pipes: [GenrePipe, ArtistPipe, CheckoutPipe],
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
  <select (change)="onChangeCheckout($event.target.value)">
      <option value="all" selected="selected">All</option>
      <option value="checkout">Checkout</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | artist: filter | genre: filter | checkout: filter"
  (click)="albumClicked(currentAlbum)"
  [class.selected]='currentAlbum === selectedAlbum'
  [currentAlbum]="currentAlbum">
  </album-display>
  <new-album (onSubmitNewAlbum)='createAlbum($event)'></new-album>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filter: string = "all";
  public selectedAlbum: Album;
  public onAlbumSelect: EventEmitter<Album>;

  constructor(){
    this.onAlbumSelect = new EventEmitter();
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
  onChangeCheckout(checkoutOption){
    this.filter = checkoutOption;
  }
  albumClicked(clickedAlbum: Album): void {
    console.log("child", clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
}
