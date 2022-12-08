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
  selectedYear!: number;
  constructor(
    private sharedService: SharedService,
    private contentService: DailyContentService) { }

  ngOnInit(): void {
    this.getCraft();
    this.selectedYear = this.contentService.getYear();
  }


  getCraft() {
    this.sharedService.currentId.subscribe((selectedDate) => {
      this.contentService.getCraft()
        .subscribe(craftRes => {
          let crafts = Object.values(craftRes);
          crafts.map((elem: any) => {
            if (selectedDate == elem.id) {
              this.craft = elem;
            }
          })
        })
    });
  }

}
// { "id": "2", "images": ["images/craft2.png", "images/craft2.2.jpg", "images/craft2.3.png"], "title": "Paper twist", "text": "Materiale necesare:\r\nhârtie (de orice culoare), foarfecă, lipici, sfoară", "credit": "madamecriativa.com.br - Pinterest" }