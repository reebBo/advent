import { Component, OnInit } from '@angular/core';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  song:any;

  constructor(private sharedService: SharedService,
    private contentService: DailyContentService) { }

  ngOnInit(): void {
    this.getSong(); 
  }


  getSong() {
    this.sharedService.currentId.subscribe((date) => {
      this.contentService.getSong()
        .subscribe(songRes => {
          let crafts = Object.values(songRes);
          crafts.map(elem => {
            if (date == elem.id) {
              this.song = elem;
            }
          })
        })
    });
  }
}
