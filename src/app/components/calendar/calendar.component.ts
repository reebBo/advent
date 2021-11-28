import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router, private sharedS:SharedService) { }

  ngOnInit(): void { 
  }

  goToContent(id: any){
    this.sharedS.updateId(id);
    this.router.navigateByUrl('/day'); 
    // this.router.navigate(['app-day', '0001']);
  }


  days = [
    { id: 1, src: '../../../assets/images/vecteezy.jpg' },
    { id: 2,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 3, src: '../../../assets/images/vecteezy.jpg' },
    { id: 4,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 5, src: '../../../assets/images/vecteezy.jpg' },
    { id: 6,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 7,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 8,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 9,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 10,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 11,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 12,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 13,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 14,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 15,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 16,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 17,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 18,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 19,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 20,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 21,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 22,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 23,  src: '../../../assets/images/vecteezy.jpg' },
    { id: 24,  src: '../../../assets/images/vecteezy.jpg' },

  ]

}
