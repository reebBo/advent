import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent implements OnInit {
  // active: boolean = false;
  constructor(private router: Router, private sharedS: SharedService) { }

  today = new Date();
  day = this.today.getDate();
  month = this.today.getMonth() + 1;// +1 because getMonth() returns position starting from 0

  ngOnInit(): void {
    // this.contentService.setYear();

    // alert('  day ' + this.day + '  month ' + this.month);
    if (this.day == 25 && this.month == 12) {
      this.router.navigateByUrl('/christmas-day');
    }
  }

  //make days clickable only on specific days, based on date.
  goToContent(id: any) {
    // alert('  id ' + id  );

    let selectedDay: number;

    //this.day == 30 && this.month===10 needed for testing before launching
    if (this.day == 27 && this.month == 10) {
      selectedDay = 1;
    }
    else {
      selectedDay = this.day;
    }
    
    // display today and previous
    if (id <= selectedDay && this.month == 12) {
      // make id available in day component to filter content based on it
      this.sharedS.updateId(id);
      this.router.navigateByUrl('/day');
    }
    else if (this.month != 12) {
      alert(
        '😁 Ești curios să vezi despre ce e vorba, nu-i așa? 😁 Merită să revii pe data de 1 DECEMBRIE, te asigur! 😁'
      );
    }
    else {
      alert(
        '😁 Aștepți cu nerăbdare să vezi ce urmează, nu-i așa? 😁 Am pregătit ceva drăguț pentru ziua următoare, te asigur! 😁'
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
