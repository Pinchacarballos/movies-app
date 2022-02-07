import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'minToHours'
})
export class MinToHoursPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60)
    const minutesRest = minutes - hours * 60
    return `${hours}h ${minutesRest}m`
  }
}
