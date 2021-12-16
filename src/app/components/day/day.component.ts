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
 

  getStory(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalService.hide();
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
          console.log(this.storyCredit)
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

  // details = [{ title: 'Cele patru lumanari ~ O poveste de advent' }];

  content = [
    {
      day: '1',
      story: '../../../assets/stories/episode1.mp3',
      song: '../../../assets/music/songs/Dragi_copii.mp3',
      craft: '../../../assets/images/craft1.png',
      craft2: '#',
      craft3: '#',
      momsCornerSong: '../../../assets/music/noel.mp3',
    },
    {
      day: '2',
      story: '',
      song: '../../../assets/music/songs/Iata_cum_veni.mp3',
      craft: '../../../assets/images/craft2.png',
      craft2: '../../../assets/images/craft2.2.jpg',
      craft3: '../../../assets/images/craft2.3.png',
      momsCornerSong: '../../../assets/music/tuEsti1stelutaMica.wav',
    },
    {
      day: '3',
      story: '',
      song: '../../../assets/music/songs/Emanuel.mp3',
      craft: '../../../assets/images/craft4.png',
      craft2: '../../../assets/images/craft3.2.jpg',
      craft3: '../../../assets/images/craft3.3.png',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.mp3',
    },
    {
      day: '4',
      story: '',
      song: '../../../assets/music/songs/O_cum_Il_laud.mp3',
      craft: '../../../assets/images/craft4.png',
      craft2: '../../../assets/images/craft4.2.png',
      craft3: '#',
      momsCornerSong: '../../../assets/music/noel.mp3',
    },
    {
      day: '5',
      story: '../../../assets/stories/episode2again.mp3',
      song: '../../../assets/music/songs/Noi_muntii_ehei.mp3',
      craft: '../../../assets/images/starEx.png',
      craft2: '../../../assets/images/star.png',
      craft3: '#',
      momsCornerSong: '../../../assets/music/laViflaim.mp3'
    },
    {
      day: '6',
      story: '',
      song: '../../../assets/music/songs/CezarAugust.mp3',
      craft: '../../../assets/images/craftHouses1.png',
      craft2: '../../../assets/images/craftHouses2.png',
      craft3: '../../../assets/images/craftHouses3.png',
      momsCornerSong: '../../../assets/music/oCome.mp3',
    },
    {
      day: '7',
      story: '',
      song: '../../../assets/music/songs/IsusSaNascutIntroNoapte.mp3',
      craft: '../../../assets/images/decor.png',
      craft2: '../../../assets/images/collage3.png',
      craft3: '../../../assets/images/collage4.png',
      momsCornerSong: '../../../assets/music/oHollyN.mp3'
    },
    {
      day: '8',
      story: '',
      song: '../../../assets/music/songs/LuminiLaFerestre.mp3',
      craft: '../../../assets/images/om1.png',
      craft2: '../../../assets/images/om2.png',
      craft3: '#',
      momsCornerSong: '../../../assets/music/laViflaim.mp3',
    },
    {
      day: '9',
      story: ' ',
      credit:"https://www.resursecrestine.ro/lectia-zilnica/47679/ce-este-credinta-lectia-54-volumul-2",
      song: '../../../assets/music/songs/AuziAuzi.mp3',
      craft: '../../../assets/images/framediy.png',
      craft2: '../../../assets/images/frameCollage.png',
      craft3: '#',
      momsCornerSong: '../../../assets/music/departeNtr1iesle.mp3 ',
    },
    {
      day: '10',
      story: ' ',
      song: '../../../assets/music/songs/CaciUnCopil.mp3 ',
      craft: '../../../assets/images/memory.png ',
      craft2: '#',
      craft3: '#',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.mp3' 
    },
    {
      day: '11',
      story: ' ',
      song: '../../../assets/music/songs/DemultDemult.mp3',
      craft: '../../../assets/images/difference1.png',
      craft2: '../../../assets/images/difference2.png',
      craft3:'../../../assets/images/maze.png',
      momsCornerSong: '../../../assets/music/silentN.mp3' 
    },
    {
      day: '12',
      story: '../../../assets/stories/episode3.mp3',
      song: '../../../assets/music/songs/EraPeLaNserat.mp3',
      craft: '../../../assets/images/jocPastori.png',
      craft2: '../../../assets/images/pastoras2.jpg',
      craft3: '../../../assets/images/pastoras3.jpg',
      momsCornerSong: '../../../assets/music/oCome.mp3', 
    },
    {
      day: '13',
      story: ' ',
      song: '../../../assets/music/songs/EuSuntCerul.mp3',
      craft: '../../../assets/images/pastorDots.png',
      craft2: '../../../assets/images/sudoku1.png',
      craft3: '../../../assets/images/sudoku2.png',
      momsCornerSong:  '../../../assets/music/oHollyN.mp3'
    },
    {
      day: '14',
      story: ' ',
      song: '../../../assets/music/songs/GlorieLuiDumnezeu.mp3',
      craft: '../../../assets/images/1.png',
      craft2: '../../../assets/images/2.png',
      craft3: '../../../assets/images/3.png',
      momsCornerSong: '../../../assets/music/departeNtr1iesle.mp3 ', 
    },
    {
      day: '15',
      story: ' ',
      song: '../../../assets/music/songs/HaiMiAuSpusEi.mp3',
      craft: '../../../assets/images/flake1.png',
      craft2: '../../../assets/images/flake2.png',
      craft3: '../../../assets/images/flake3.png',
      momsCornerSong: '../../../assets/music/laViflaim.mp3'
    },
    {
      day: '16',
      story: ' ',
      song: '../../../assets/music/songs/nu_va_temeti.mp3',
      craft: '../../../assets/images/pastorii.png',
      craft2: '#',
      craft3: '#',
      momsCornerSong: '../../../assets/music/silentN.mp3' 
    },
    {
      day: '17',
      story: ' ',
      song: '../../../assets/music/songs/OCeFrumoasaNoapte.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.mp3', 
    },
    {
      day: '18',
      story: ' ',
      song: '../../../assets/music/songs/SeNasteAziLaBetleem.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/laViflaim.mp3'
    },
    {
      day: '19',
      story: ' ',
      song: '../../../assets/music/songs/SeNasteAzi1Rege.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong:  '../../../assets/music/oHollyN.mp3'
    },
    {
      day: '20',
      story: ' ',
      song: '../../../assets/music/songs/TeBucuraMaria.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/oCome.mp3' 
    },
    {
      day: '21',
      story: ' ',
      song: '../../../assets/music/songs/3pastori.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/departeNtr1iesle.mp3 ', 
    },
    {
      day: '22',
      story: ' ',
      song: '../../../assets/music/songs/TuEsti1steluta.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/silentN.mp3' 
    },
    {
      day: '23',
      story: ' ',
      song: '../../../assets/music/songs/UndeEPruncul.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',
      momsCornerSong: '../../../assets/music/peBoltaCeruluiSenin.mp3'
    },
    {
      day: '24',
      story: ' ',
      song: '../../../assets/music/songs/CraciunulAVenit.mp3',
      craft: '../../../assets/images/ ',
      craft2: '../../../assets/images/ ',
      craft3: '#',      
      momsCornerSong: '../../../assets/music/oCome.mp3', 
    }
  ];
}
