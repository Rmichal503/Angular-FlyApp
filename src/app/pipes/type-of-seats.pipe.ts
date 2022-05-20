import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeOfSeats'
})
export class TypeOfSeatsPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case "main":
        return value = "W Biznes klasie"
      case "premium":
        return value = 'W klasie Premium'
      case "first":
        return value = "W Pierwszej klasie"
    }
    return value
  }

}
