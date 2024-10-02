import { Pipe, PipeTransform } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);


@Pipe({
  name: 'sort',
  standalone:true
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args?: string): any[] {
    if (!value) return [];

    if (args === 'prodName') {
      return value.sort((a: any, b: any) => {
        return a.productName.localeCompare(b.productName);
      });
    } else if (args === 'price') {
      return value.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    }
    return value;
  }
}
