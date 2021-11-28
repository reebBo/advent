import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  //different content in modal on clicking different buttons
  isStory: boolean = false;
  isMusic: boolean = false;
  isCraft: boolean = false;
  isNext: boolean = false;

  isCollapsed = true;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  myModal = document.getElementById('template');  

  getStory(template: TemplateRef<any>) {
    // alert('story');
    // this.isStory= false;
    // this.isMusic= false;
    // this.isCraft = false;
    // this.isNext = false;
    // console.log('this.isStory');


    this.modalRef = this.modalService.show(template); 
  }
  getSomethingElse(template: TemplateRef<any>) {
    // alert('SomethingElse');
    // this.isStory= false;
    // this.isMusic= false;
    // this.isCraft = false;
    // this.isNext = true;
    alert(this.isNext);

    this.modalRef = this.modalService.show(template); 
  }
  getActivity(template: TemplateRef<any>) {
    // alert('Activity');
    // this.isStory= false;
    // this.isMusic= false;
    // this.isCraft = true;
    // this.isNext = false;
    // alert('this.isCraft');

    this.modalRef = this.modalService.show(template); 

  }
  getMusic(template: TemplateRef<any>) {
    // alert('Music');
    // this.isStory= false;
    // this.isMusic= true;
    // this.isCraft = false;
    // this.isNext = false;
    // alert(this.isMusic);

    this.modalRef = this.modalService.show(template); 

  }

  content =[
    { id: 'story', title:'Cele patru lumanari ~ O poveste de advent', contentAudio: '../../../assets/stories/episode1.mp3', transcript:'' },
    { id: 'song', title:'SONG', contentAudio: '../../../assets/images/vecteezy.jpg', transcript:'../../../assets/images/vecteezy.jpg' },
    { id: 'craft', title:'CRAFT', contentAudio: '../../../assets/images/vecteezy.jpg', transcript:'../../../assets/images/vecteezy.jpg' },
    { id: 'next', title:'SMTH ELSE', contentAudio: '../../../assets/images/vecteezy.jpg', transcript:'../../../assets/images/vecteezy.jpg' }
  ]
}
