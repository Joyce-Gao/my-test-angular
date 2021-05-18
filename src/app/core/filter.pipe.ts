import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    return array?.filter(
      (item) =>
        item.name.includes(field.toLowerCase()) ||
        item.id.includes(field.toLowerCase()) ||
        item.snippet.includes(field.toLowerCase())
    );
    // return array?.filter(item => {
    //   Object.values(item).forEach(value => {
    //     if(typeof value === 'string') {
    //       return value.includes(field.toLowerCase())
    //     }
    //     return false
    //   })
    // })
  }

}
