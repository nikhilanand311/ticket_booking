import React, { useEffect } from 'react';
import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar/dist/fullcalendar.min.js';
import 'fullcalendar/dist/locale-all.js';

const Calendar = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#calendar').fullCalendar({
        locale: 'zh-cn',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2018-03-12',
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: [
          {
            title: 'All Day Event',
            start: '2018-03-01'
          },
          {
            title: 'Long Event',
            start: '2018-03-07',
            end: '2018-03-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2018-03-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2018-03-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2018-03-11',
            end: '2018-03-13'
          },
          {
            title: 'Meeting',
            start: '2018-03-12T10:30:00',
            end: '2018-03-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2018-03-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2018-03-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2018-03-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2018-03-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2018-03-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-03-28'
          }
        ]
      });
    });
  }, []);

}
