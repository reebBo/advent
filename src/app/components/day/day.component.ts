import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  Object = Object;
  categories: any[] = [];

  constructor(private router: Router, private contentS: DailyContentService) { }

  navigateToElement(route: any) {
    this.router.navigate([`/${route}`]);
  }

  ngOnInit(): void {
    this.setCategoriesByYear();
  }

  setCategoriesByYear() {
    const selectedYear = this.contentS.getYear();
    if (selectedYear === 2021) {
      this.categories = [{ story: 'Poveste' }, { song: 'Colţul cu muzică' }, { craft: 'Craft' }, { moms: 'Colțul mămicilor' }]
    }
    else if(selectedYear === 2022){
      this.categories = [{ story: 'Poveste' }, { song: 'Colţul cu muzică' }, { craft: 'Un altfel de Advent' }, { moms: 'Colțul mămicilor' }]

    }

  }
 
}