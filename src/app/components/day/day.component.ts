import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/services/shared.service';

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
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.currentId.subscribe((data) => {
      this.comingId = data;
    });
  }

  myModal = document.getElementById('template');

  getStory(template: TemplateRef<any>) { 
    this.modalRef = this.modalService.show(template);
    // if(this.comingId ===)

    
  }
  getSomethingElse(template: TemplateRef<any>) { 
    alert(this.isNext);

    this.modalRef = this.modalService.show(template);
  }
  getActivity(template: TemplateRef<any>) { 
    this.modalRef = this.modalService.show(template);
  }
  getMusic(template: TemplateRef<any>) { 
    this.modalRef = this.modalService.show(template);
  }

  details=[
    { title: 'Cele patru lumanari ~ O poveste de advent'},
    {musicForCraft:''},
  ]
  content = [
  {
      day:'1',
      story:'../../../assets/stories/episode1.mp3',
      transcriptStory: '',
      song:'',
      transcriptSong: '',
      craft:'',
      descriptionCraft:'',
      motherCorner:'pathToaPicture'
    },
    {
      day:'2',
      story:'../../../assets/stories/ShmaIsrael.mp3', 
      transcriptStory: '',
      song:'',
      transcriptSong: '',
      craft:'',
      descriptionCraft:'',
      motherCorner:'pathToaPicture'
    },
    {
      day:'3',
      story:'../../../assets/stories/Moonlight.mp3',
      transcriptStory: '',
      song:'',
      transcriptSong: '',
      craft:'',
      descriptionCraft:'',
      motherCorner:'pathToaPicture'
    },
    {
      day:'4',
      story:'../../../assets/stories/NonJeNeRegretteRien.mp3',
      transcriptStory: '',
      song:'',
      transcriptSong: '',
      craft:'',
      descriptionCraft:'',
      motherCorner:'pathToaPicture'
    },
    {
      day:'5',
      story:'../../../assets/stories/tobymac.mp3',
      transcriptStory: '',
      song:'',
      transcriptSong: '',
      craft:'',
      descriptionCraft:'',
      motherCorner:'pathToaPicture'
    }
  ];
}
