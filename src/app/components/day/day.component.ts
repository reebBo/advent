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
  transcriptSong: string = '';
  titleCraft: string = '';
  descriptionCraft: string = '';

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
      song: '../../../assets/music/songs/Dragi_copii.mp3',
      craft: '../../../assets/images/craft1.png',
      craft2: '',
      craft3: '',
      musicForCraft: '../../../assets/music/mixSarbatoriFericite.mp3',
      momsCornerSong: '../../../assets/music/noel.wav',
      momsCornerText: '',
      momsCornerPic: '../../../assets/images/tea.jpg',
    },
    {
      day: '2',
      story: '../../../assets/stories/episode2.mp3',
      song: '../../../assets/music/songs/Iata_cum_veni.mp3',
      craft: '../../../assets/images/craft2.png',
      craft2: '../../../assets/images/craft2.2.jpg',
      craft3: '../../../assets/images/craft2.3.png',
      momsCornerSong: '../../../assets/music/tuEsti1stelutaMica.wav',
      momsCornerText: '',
      momsCornerPic: 'pathToaPicture',
    },
    {
      day: '3',
      story: '../../../assets/stories/episode3.mp3',
      song: '../../../assets/music/songs/O_cum_Il_laud.mp3',
      craft: '',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.wav',
      momsCornerText: '',
      momsCornerPic: 'pathToaPicture',
    },
    {
      day: '4',
      story: '../../../assets/stories/episode4.mp3',
      song: '../../../assets/music/songs/Noi_muntii_ehei.mp3',
      craft: '',
      momsCornerSong: '../../../assets/music/noel.mp3',
      momsCornerText: '',
      momsCornerPic: 'pathToaPicture',
    },
    {
      day: '5',
      story: '../../../assets/stories/episode5.1.Final.mp3',
      song: '',
      craft: '',
      momsCornerSong: '../../../assets/music/noel.mp3',
      momsCornerText: '',
      momsCornerPic: 'pathToaPicture',
    },
  ];
}
