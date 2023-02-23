
export interface dCalendarAgendaInterface {
  _id: string;
  name: string;
  className: string;
  durationEditable: boolean;
  editable: boolean;
  isVisible: boolean;
  color?: string;
  default?: boolean;
  googleCalendarId?: string;
  googleCalendarApiKey?: string; 
}