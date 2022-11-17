import { Component, OnInit } from '@angular/core';
import { DailyContentService } from 'src/app/services/daily-content.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  story: any;

  constructor(private sharedService: SharedService,
    private contentService: DailyContentService, public navig: NavigationService) { }

  ngOnInit(): void {
    this.getStory();
  }

  getStory() {
    this.sharedService.currentId.subscribe((selectedDate) => {
      this.contentService.getStory()
        .subscribe((storyRes: any) => {

          let crafts = Object.values(storyRes);
          crafts.map((elem: any) => {
            if (selectedDate == elem.id) {
              this.story = elem;
            }
          })
        })
    });
  }
}
