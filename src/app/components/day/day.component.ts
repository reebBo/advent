import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  //different content in modal on clicking different buttons
  isStory: boolean = false;
  isMusic: boolean = false;
  isCraft: boolean = false;
  isNext: boolean = false;

  isCollapsed = true;
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.sharedService.currentId.subscribe((data) => {
      this.comingId = data;
    });

    this.getTranscriptStory();
    this.getTranscriptSong();
  }

  myModal = document.getElementById('template');

  getStory(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // if(this.comingId ===)
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
  date: Date = new Date();
  // day = this.date.getDate();
  day = 1;
  // ======================================================
  getTranscriptStory() {
    this.http
      .get('../../../assets/jsonContent/story1.json')
      .subscribe((res) => {
        let values = Object.values(res);

        values.forEach((element) => {
          console.log('element.id '+ element.id);
          if (element.id == this.day) {
            this.transcriptStory = element.text;
            console.log(this.transcriptStory);
          }
        }); 
      });
  }
  // ======================================================
  getTranscriptSong() {
    this.content.forEach(element => {
      if(+element.day==this.day){
        console.log('this.transc');
        this.transcriptSong= element.transcriptSong;
      }
    });
   
     return this.transcriptSong;
  }

  // ======================================================




  details = [
    { title: 'Cele patru lumanari ~ O poveste de advent' },
    { musicForCraft: '' },
  ];
  content = [
    {
      day: '1',
      story: '../../../assets/stories/episode1.mp3',
      transcriptStory: '',
      song: '',
      transcriptSong: 
      ' Dragi copii veniti toti <br> La Isus, fetite si baieti, veniti <br>Pruncul nou nascut <br> Sa ne inchinam smerit <br>R: Aleluia din clopotei <br> Aleluia cu ingerii <br> Aleluia, colinzi pe drum, <br> Iar e Craciun <br> Noapte e, si-n iesle <br>Pastorasi in paie pe Isus l-au zarit <br> Maria lin canta <br> Dragi copii, sa veniti <br> In seara cand cade primul fulg de nea <br> Haideti la ieslea Sa <br> Sa-i dam lui Isus inima',
      craft: '',
      descriptionCraft: '',
      motherCorner: 'pathToaPicture',
    },
    {
      day: '2',
      story: '../../../assets/stories/episode2.mp3',
      transcriptStory: '',
      song: '',
      transcriptSong: '',
      craft: '',
      descriptionCraft: '',
      motherCorner: 'pathToaPicture',
    },
    {
      day: '3',
      story: '../../../assets/stories/episode3.mp3',
      transcriptStory: '',
      song: '',
      transcriptSong: '',
      craft: '',
      descriptionCraft: '',
      motherCorner: 'pathToaPicture',
    },
    {
      day: '4',
      story: '../../../assets/stories/episode4.mp3',
      transcriptStory: '',
      song: '',
      transcriptSong: '',
      craft: '',
      descriptionCraft: '',
      motherCorner: 'pathToaPicture',
    },
    {
      day: '5',
      story: '../../../assets/stories/episode5.1.Final.mp3',
      transcriptStory: '',
      song: '',
      transcriptSong: '',
      craft: '',
      descriptionCraft: '',
      motherCorner: 'pathToaPicture',
    },
  ];
}
