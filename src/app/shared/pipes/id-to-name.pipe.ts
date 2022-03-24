import { Pipe, PipeTransform } from '@angular/core';
import { Department } from 'src/app/features/employee/model/employee.model';


@Pipe({
  name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

  transform(value: number, departments: Department[] | null): string | undefined {
    console.log(departments);
    return departments?.find(x => x.id == value)?.name;
  }

}
