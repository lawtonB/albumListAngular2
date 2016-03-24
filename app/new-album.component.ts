import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: "new-album",
  outputs: ["onSubmitNewAlbum"],
  template: `
  <div class= 'album-form'>
    <h3>Create Album: </h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre>
    <button (click)="addAlbum(newName, newArtist, newPrice, newGenre)">add</button>
  </div>
  `
})

export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<Album>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(newName: HTMLInputElement, newArtist: HTMLInputElement, newPrice: HTMLInputElement, newGenre: HTMLInputElement){
    console.log("price: " + newPrice.value);
    var newAlbum = new Album(newName.value, newArtist.value, parseInt(newPrice.value), newGenre.value, 0);
    this.onSubmitNewAlbum.emit(newAlbum);
    newName.value = "";
    newArtist.value = "";
    newPrice.value = "";
    newGenre.value = "";
  }
}
