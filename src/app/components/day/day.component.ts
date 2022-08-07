import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  Object = Object; 

  categories = [{ story: 'Poveste' }, { song: 'Colţul cu muzică' }, { craft: 'Craft' }, { moms: 'Colțul mămicilor' }]

  constructor( private router: Router) { }

  navigateToElement(route: any) {
    this.router.navigate([`/${route}`]);
  }

  ngOnInit(): void {}
 
  // transcriptStory: string = '';
  // storyCredit: string = '';

  // transcriptSong: string = '';
  // titleCraft: string = '';
  // descriptionCraft: string = '';
  // craftCredit: string = '';
  // date: Date = new Date();
  // day = this.date.getDate();
  // // day = 1; // for testing purposes before 1st of december




  // ===========================STORY TRANSCRIPT===========================
  // getTranscriptStory() {
  //   let selectedDay = this.comingId;
  //   this.http.get('../../../assets/jsonContent/story.json').subscribe((res) => {
  //     let values = Object.values(res);

  //     values.forEach((element) => {
  //       if (element.id == selectedDay) {
  //         this.transcriptStory = element.text;
  //         this.storyCredit = element.credit;
  //         console.log(this.storyCredit)
  //       }
  //     });
  //   });
  // }
  // ==========================SONG TRANSCRIPT============================
  // getTranscriptSong() {
  //   let selectedDay = this.comingId;
  //   this.http.get('../../../assets/jsonContent/songs.json').subscribe((res) => {
  //     let values = Object.values(res);
  //     values.forEach((element) => {
  //       if (element.id == selectedDay) {
  //         this.transcriptSong = element.text;
  //       }
  //     });
  //   });

  //   return this.transcriptSong;
  // }

  // ======================================================
  // getCraftDetails() {
  //   let selectedDay = this.comingId;
  //   this.http.get('../../../assets/jsonContent/craft.json').subscribe((res) => {
  //     let values = Object.values(res);
  //     values.forEach((element) => {
  //       if (element.id == selectedDay) {
  //         this.titleCraft = element.title;
  //         this.descriptionCraft = element.text;
  //         this.craftCredit = element.credit;

  //       }
  //     });
  //   });

  //   return this.transcriptSong;
  // } 
 
}
