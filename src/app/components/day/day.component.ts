import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  comingId: string = '';

  isCollapsed = true;
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private sharedService: SharedService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // get clicked day id from calendar component
    this.sharedService.currentId.subscribe((data) => {
      this.comingId = data;
    });

    // all these mmust go in their respectives modals
    this.getTranscriptStory();
    this.getTranscriptSong();
    this.getCraftDetails();
  }

  // myModal = document.getElementById('template');

  getStory(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getSomethingElse(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getActivity(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getMusic(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  transcriptStory: string = '';
  storyCredit: string = '';

  transcriptSong: string = '';
  titleCraft: string = '';
  descriptionCraft: string = '';
  craftCredit: string = '';
  date: Date = new Date();
  day = this.date.getDate();
  // day = 1; // for testing purposes before 1st of december

  // ===========================STORY TRANSCRIPT===========================
  getTranscriptStory() {
    let selectedDay = this.comingId;
    this.http.get('../../../assets/jsonContent/story.json').subscribe((res) => {
      let values = Object.values(res);

      values.forEach((element) => {
        if (element.id == selectedDay) {
          this.transcriptStory = element.text;
          this.storyCredit=element.credit;
        }
      });
    });
  }
  // ==========================SONG TRANSCRIPT============================
  getTranscriptSong() {
    let selectedDay = this.comingId;
    this.http.get('../../../assets/jsonContent/songs.json').subscribe((res) => {
      let values = Object.values(res);
      values.forEach((element) => {
        if (element.id == selectedDay) {
          this.transcriptSong = element.text;
        }
      });
    });

    return this.transcriptSong;
  }

  // ======================================================
  getCraftDetails() {
    let selectedDay = this.comingId;
    this.http.get('../../../assets/jsonContent/craft.json').subscribe((res) => {
      let values = Object.values(res);
      values.forEach((element) => {
        if (element.id == selectedDay) {
          this.titleCraft = element.title;
          this.descriptionCraft = element.text;
          this.craftCredit=element.credit;

        }
      });
    });

    return this.transcriptSong;
  }

  // ======================================================

  details = [{ title: 'Cele patru lumanari ~ O poveste de advent' }];

  content = [
    {
      day: '1',
      story: '../../../assets/stories/episode1.mp3',
      storyCredit:'',
      song: '../../../assets/music/songs/Dragi_copii.mp3',
      songCredit:'',
      craft: '../../../assets/images/craft1.png',
      craft2: '',
      craft3: '',
      musicForCraft: '../../../assets/music/mixSarbatoriFericite.mp3',
      momsCornerSong: '../../../assets/music/noel.wav',
    },
    {
      day: '2',
      story: '../../../assets/stories/episode2.mp3',
      storyCredit:'',
      song: '../../../assets/music/songs/Iata_cum_veni.mp3',
      songCredit:'',
      craft: '../../../assets/images/craft2.png',
      craft2: '../../../assets/images/craft2.2.jpg',
      craft3: '../../../assets/images/craft2.3.png',
      momsCornerSong: '../../../assets/music/tuEsti1stelutaMica.wav',
    },
    {
      day: '3',
      story: '../../../assets/stories/episode3.mp3',
      storyCredit:'',
      song: '../../../assets/music/songs/Emanuel.mp3',
      songCredit:'',
      craft: '../../../assets/images/craft3.png',
      craft2: '../../../assets/images/craft3.2.jpg',
      craft3: '../../../assets/images/craft3.3.png',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.wav',
    },
    {
      day: '4',
      story: '../../../assets/stories/episode4.mp3',
      storyCredit:'',
      song: '../../../assets/music/songs/Noi_muntii_ehei.mp3',
      songCredit:'',
      craft: '../../../assets/images/craft4.png',
      craft2: '../../../assets/images/craft4.2.jpg',
      craft3: '../../../assets/images/craft4.3.png',
      momsCornerSong: '../../../assets/music/noel.mp3',
    },
    {
      day: '5',
      story: '../../../assets/stories/episode5.1.Final.mp3',
      storyCredit:'',
      song: '',
      songCredit:'',
      craft: '../../../assets/images/craft5.png',
      craft2: '../../../assets/images/craft5.2.jpg',
      craft3: '../../../assets/images/craft5.3.png',
      momsCornerSong: '../../../assets/music/noel.mp3',
    },
  ];
}
