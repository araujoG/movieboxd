import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourWithMinutes'
})
export class HourWithMinutesPipe implements PipeTransform {

  transform(durationInMinutes: number): unknown {
    const hours = Math.trunc(durationInMinutes / 60);
    const minutes = durationInMinutes - (hours * 60);


    return `${hours} h ${minutes} min`;
  }

}
