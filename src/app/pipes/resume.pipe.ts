import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string,limit : number): string {
    return value.substring(0,limit)+'...';
  }

}
