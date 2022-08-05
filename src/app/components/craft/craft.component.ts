import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DailyContentService } from 'src/services/daily-content.service';

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
    this.sharedService.currentId.subscribe((date) => {
      this.contentService.getCraft()
        .subscribe(craftRes => {
          let crafts = Object.values(craftRes);
          crafts.map(elem => {
            if (date == elem.id) {
              this.craft = elem;
            }
          })
        })
    });
  }

}
