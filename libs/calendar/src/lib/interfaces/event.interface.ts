import { EventImpl } from "@fullcalendar/core/internal";

export interface dCalendarEventInterface extends EventImpl {
  _id: string;
  title: string;
  description?: string;
  isVisible: boolean;
  extendedProps: {
    calendarIds?: string[];
    googleCalendarId?: string;
  }
}