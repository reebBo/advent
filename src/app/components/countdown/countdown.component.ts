import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  chrismasDate = '25/12/2021';

  today = new Date();
  xMas = new Date(this.today.getFullYear(), 11, 25);
  millisecondsDay = 1000 * 60 * 60 * 24;
  daysToDecember: any = '';


  constructor() { }

  ngOnInit(): void {
    let difference = +this.xMas - +this.today;
    this.daysToDecember = Math.ceil(difference / this.millisecondsDay);
  }




  // getTimeRemaining(endtime: any) {
  //   let date: any = new Date();
  //   const total = Date.parse(this.chrismasDate) - Date.parse(date);
  //   //Convert the Time to a Usable Format
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));

  //   return {
  //     total,
  //     days,
  //     hours,
  //     minutes,
  //     seconds
  //   };
  // }

}
