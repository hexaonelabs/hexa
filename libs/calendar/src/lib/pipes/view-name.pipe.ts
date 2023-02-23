import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "viewName"
})
export class ViewNamePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'dayGridMonth':
        return 'Month';
      case 'timeGridWeek':
        return 'Week';
      case 'timeGridDay':
        return 'Day';
      case 'listWeek':
        return 'List';
      case 'listDay':
        return 'List';
      case 'listMonth':
        return 'List';
      default:
        return 'Week';
    }
  }
}