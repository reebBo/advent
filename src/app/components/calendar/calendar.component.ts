import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent implements OnInit {
  // active: boolean = false;
  constructor(private router: Router, private sharedS: SharedService, private contentServ: DailyContentService) { }

  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1;// +1 because getMonth() returns position starting from 0

  ngOnInit(): void {
    if (this.day == 25 && this.month == 12) {
      this.router.navigateByUrl('/christmas-day');
    }
  }


  //make days clickable only on specific days, based on date.
  goToContent(id: any) {
    let currentYear = this.contentServ.getYear();
    let selectedDay: number;

    //this.day == 30 && this.month===10 && currentYear==2022 needed for testing before launching
    // if ((this.day == 28||29||30) && this.month == 11 && currentYear) {
    //   selectedDay = 1;
    //   this.month=12;
    // }
    // else {
    selectedDay = this.day;
    // }

    // display today and previous  
    if ((id <= selectedDay && this.month == 12 && currentYear) || (currentYear == 2021)) {
      this.sharedS.updateId(id);// make id available in day component to filter content based on it
      this.router.navigateByUrl('/day');
    }
    else if (this.month < 12) {
      alert(
        ` ${currentYear} 😁 Ești curios să vezi despre ce e vorba, nu-i așa? 😁 Merită să revii pe data de 1 DECEMBRIE, te asigur! 😁 Până atunci, poți răsfoi conținutul anului trecut, selectând butonul 2021.`
      );
    }
    else {
      alert(
        ` ${currentYear} 😁 Aștepți cu nerăbdare să vezi ce urmează, nu-i așa? 😁 Am pregătit ceva drăguț pentru ziua următoare, te asigur! 😁 Pana atunci, poti consulta continutul anului trecut, selectand butonul 2021.`
      );
    }
  }


  days = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
  ];
}
