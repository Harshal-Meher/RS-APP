import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'package'
})
export class PackagePipe implements PipeTransform {

  transform(value: any,args: any): any {
    
    if(!args) {
      return value;
    }
    if(!value){
      return null;
    }
    args = args.toLocaleString();
    
    return value.filter((item:any)=> {
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })

  }

}
