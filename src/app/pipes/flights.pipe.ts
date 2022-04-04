import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flights'
})
export class FlightsPipe implements PipeTransform {

  transform(value: string) {
    switch (value) {
      case 'WAW':
        return value = 'Warszawy'
      case 'BER':
        return value = 'Berlina'
      case 'JFK':
        return value = 'Nowego Jorku'
      case 'LUZ':
        return value = 'Lublina'
      case 'GDN':
        return value = 'Gdańska'
      case 'CDG':
        return value = 'Paryża'
      case 'CPT':
        return value = 'Kapsztadu'
      case 'TRN':
        return value = 'Turynu'
      case 'LAX':
        return value = 'Los Angeles'
      case 'HND':
        return value = 'Tokio'
      default:
        return value;
    }
  }

}
