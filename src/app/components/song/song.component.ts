import { Component, OnInit } from '@angular/core';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  song: any;

  constructor(private sharedService: SharedService,
    private contentService: DailyContentService) { }

  ngOnInit(): void {
    this.getSong();
  }


  getSong() {
    this.sharedService.currentId.subscribe((selectedDate) => {
      this.contentService.getSong()
        .subscribe(songRes => {

          let songs = Object.values(songRes);
          songs.map((elem: any) => {
            if (selectedDate == elem.id) {
              this.song = elem;
            }
          })
        })
    });
  }
}
