import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DailyContentService } from './services/daily-content.service';
import { NavigationService } from './services/navigation.service';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  highlightedButton = 0;
  selectedYear!: number; 
  modalRef: BsModalRef | undefined;
  
  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal?.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }



  constructor(private modalService: BsModalService, private router: Router, public navig: NavigationService, public contentService: DailyContentService) { }
  ngOnInit(): void {
    //for navigation between each day's element
    this.navig.startSaveHistory();
    this.set2022();
    // this.openModal();
    this.showModal();
  }

  set2021() {
    this.contentService.setYear(2021);
    this.selectedYear = 2021;
    this.router.navigateByUrl('/calendar');
  }
  set2022() {
    this.contentService.setYear(2022);
    this.selectedYear = 2022;
    this.router.navigateByUrl('/calendar');
  }



  getExplorerInfo() {
    let t: any = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf('msie')
      ? {
        //ie < 11
        type: 'IE',
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
      : !!t.match(/trident\/.+?rv:(([\d.]+))/)
        ? {
          // ie 11
          type: 'IE',
          version: 11,
        }
        : 0 <= t.indexOf('edge')
          ? {
            type: 'Edge',
            version: Number(t.match(/edge\/([\d]+)/)[1]),
          }
          : 0 <= t.indexOf('firefox')
            ? {
              type: 'Firefox',
              version: Number(t.match(/firefox\/([\d]+)/)[1]),
            }
            : 0 <= t.indexOf('chrome')
              ? {
                type: 'Chrome',
                version: Number(t.match(/chrome\/([\d]+)/)[1]),
              }
              : 0 <= t.indexOf('opera')
                ? {
                  type: 'Opera',
                  version: Number(t.match(/opera.([\d]+)/)[1]),
                }
                : 0 <= t.indexOf('Safari')
                  ? {
                    type: 'Safari',
                    version: Number(t.match(/version\/([\d]+)/)[1]),
                  }
                  : {
                    type: t,
                    version: -1,
                  };
  };
}
