import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DailyContentService } from 'src/services/daily-content.service';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {
  crafts!: any[];
  selectedDay: string = '';
  
  constructor(
    private sharedService: SharedService,
    private contentService:DailyContentService) { }
  
  
  getCraft() {
    this.contentService.getCraft()
    .subscribe(craftRes => {
      this.crafts = Object.values(craftRes); 
    })
  }


  ngOnInit(): void {
    this.sharedService.currentId.subscribe((data) => {
      this.selectedDay = data;
    });
    this.getCraft();
  }

}
