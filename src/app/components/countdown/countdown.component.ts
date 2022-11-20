import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {

  today = new Date();
  xMas = new Date(this.today.getFullYear(), 11, 25);
  millisecondsDay = 1000 * 60 * 60 * 24;
  daysToDecember: any = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    let difference = +this.xMas - +this.today;
    this.daysToDecember = Math.ceil(difference / this.millisecondsDay);
  }

  goHome() {
    this.route.navigateByUrl('/');
  }
 
}
