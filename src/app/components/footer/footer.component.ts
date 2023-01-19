import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today = new Date();
  decemberFirst = new Date(this.today.getFullYear(), 11, 1);
  millisecondsDay = 1000 * 60 * 60 * 24;
  noOfDaysToAdvent: number = 0;
  // -----------

  day = this.today.getDate();
  month = this.today.getMonth() + 1;

  constructor() { }

  ngOnInit(): void {
    let difference = +this.decemberFirst - +this.today;
    this.noOfDaysToAdvent = Math.ceil(difference / this.millisecondsDay);
  }



  // database
  // return this.httpClient.get('https://reeb.dk/users.php', { params: user })
  //   .pipe(
  //     map(a => alert('hghgy '+JSON.stringify(a)))
  //   )
  //   .subscribe(resp => {
  //     console.log("hello", resp);
  //     this.hideModal();
  //   });

}



