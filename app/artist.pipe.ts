import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from "./album.model";

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredArtist = args[0];
    if(desiredArtist === "prince") {
      return input.filter((album) => {
        return album.artist === "prince";
      });
    } else if(desiredArtist === "metallica") {
      return input.filter((album) => {
        return album.artist === "metallica";
      });
    } else if(desiredArtist === "they might be giants") {
      return input.filter((album) => {
        return album.artist === "they might be giants";
      });
    } else {
      return input;
    }
  }
}
