import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "orderby"
})
export class OrderByPipe implements PipeTransform {
    transform(array: any, args?: string, order?: string): Object[] {
        if(!order) {
            order = 'asc';
        }
        array.sort((a: any, b: any) => {
            if(order == 'asc') {
                if (a[args] < b[args]) {
                    return -1;
                } else if (a[args] > b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                if (a[args] > b[args]) {
                    return -1;
                } else if (a[args] < b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            }

        });
        return array;
    }
}