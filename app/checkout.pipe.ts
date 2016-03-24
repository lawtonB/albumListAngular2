import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from "./album.model";

@Pipe({
  name: "checkout",
  pure: false
})

export class CheckoutPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredCheckout = args[0];
    if(desiredCheckout === "checkout") {
      return input.filter((album) => {
        return album.checkout === true;
      });
    } else if(desiredCheckout === "all") {
      return input.filter((album) => {
        return album.checkout === false;
      });
    } else {
      return input;
    }
  }
}
