import { Component, OnInit } from '@angular/core';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {
  craft: any;

  constructor(
    private sharedService: SharedService,
    private contentService: DailyContentService) { }

  ngOnInit(): void {
    this.getCraft();  
  }


  getCraft() {
    this.sharedService.currentId.subscribe((selectedDate) => {
      this.contentService.getCraft()
        .subscribe(craftRes => {

          let crafts = Object.values(craftRes);
          crafts.map(elem => {
            if (selectedDate == elem.id) {
              this.craft = elem;
            }
          })
        })
    });
  }

}
