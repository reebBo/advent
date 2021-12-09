import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private router: Router, private sharedS: SharedService) {}

  ngOnInit(): void {}

  date = new Date();
  day = this.date.getDate();

  //make days clickable only on specific days, based on date.
  goToContent(id: any) {
    let selectedDay: number;
    if (this.day == 30) {
      selectedDay = 1;
    } else {
      selectedDay = this.day; 
    }
    // display today's day and previous
    if (id <= selectedDay) {
      // make id available in day component to filter content based on it
      this.sharedS.updateId(id);
      this.router.navigateByUrl('/day');
      
    } else {
      alert(
        '😁 Aștepți cu nerăbdare să vezi ce urmează, nu-i așa? 😁 Am pregătit ceva drăguț pentru zilele următoare, te asigur! 😁'
      );
    }
  }

  days = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10},
    { id: 11},
    { id: 12},
    { id: 13},
    { id: 14},
    { id: 15},
    { id: 16},
    { id: 17},
    { id: 18},
    { id: 19},
    { id: 20},
    { id: 21},
    { id: 22},
    { id: 23},
    { id: 24},
  ];
}
