import { Component } from '@angular/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
// make the <full-calendar> element globally available
defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fullCld';
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prevYear,prev,today,next,nextYear',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
  };

  toggleWeekends() {
    this.calendarOptions = {
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends,
    };
  }
}
