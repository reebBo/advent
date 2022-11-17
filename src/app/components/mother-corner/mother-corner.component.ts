import { Component, OnInit } from '@angular/core';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mother-corner',
  templateUrl: './mother-corner.component.html',
  styleUrls: ['./mother-corner.component.scss']
})
export class MotherCornerComponent implements OnInit {
  
  momsCorner:any;
  
  constructor(private sharedService: SharedService,
    private contentService: DailyContentService) { }

  ngOnInit(): void {
    this.getMomsCorner();
  }



  getMomsCorner() {
    this.sharedService.currentId.subscribe((selectedDate) => {
      this.contentService.getMomsCorner()
        .subscribe(songRes => {
          let crafts = Object.values(songRes);
          crafts.map((elem:any) => {
            if (selectedDate == elem.id) {
              this.momsCorner = elem;
            }
          })
        })
    });
  }
}
