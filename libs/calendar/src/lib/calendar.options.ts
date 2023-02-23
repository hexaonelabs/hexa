import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { FullCalendarComponent,  } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


export const getOptions = ({initialView}: {initialView: string}): CalendarOptions  => ({
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, googleCalendarPlugin ],
  height: window.innerHeight - 117,
  initialView,
  headerToolbar: false,
  themeSystem: 'standard',
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    meridiem: false,
    hour12: false
  },
  slotLabelFormat: {
    hour12: false,
    minute: '2-digit',
    hour: '2-digit',
  },
  firstDay: 1,
  weekends: true,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  nowIndicator: true,
  // https://fullcalendar.io/docs/content-injection
  dayHeaderContent: (a) => ({html: `
    <ion-text color="${a.isToday ? 'primary' : 'none'}">
      ${a.date.toLocaleDateString([], {
        weekday: 'long',  
      })}
      <br/><span>
        ${a.date.toLocaleDateString([], {
          day: 'numeric',  
        })}
      </span>
    </ion-text>
  `}),
  // https://fullcalendar.io/docs/view-specific-options
  views: {
    dayGridMonth: { // name of view
      dayHeaderContent: (a) => ({html: `
        ${a.date.toLocaleDateString([], {
          weekday: 'short',  
        })}
      `}),
      titleFormat: { hour12: false },
    },
    agendaThreeDay: {
      type: 'timeGrid',
      duration: { days: 3 },
      buttonText: '3 day'
    },
  },
  loading: (isLoading) => {
    console.log('loading', isLoading);
  },
  allDayText: '',
});