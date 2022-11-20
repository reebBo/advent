import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DailyContentService } from './services/daily-content.service';
import { NavigationService } from './services/navigation.service';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './helpers/validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = false;

  form!: FormGroup;
  submitted = false;

  highlightedButton = 0;
  selectedYear!: number;
  modalRef: BsModalRef | undefined;

  today = new Date();
  decemberFirst = new Date(this.today.getFullYear(), 11, 1);
  millisecondsDay = 1000 * 60 * 60 * 24;
  noOfDaysToAdvent: number = 0;

  day = this.today.getDate();
  month = this.today.getMonth() + 1;


  constructor(private formBuilder: FormBuilder, private router: Router, public navig: NavigationService, public contentService: DailyContentService) { }


  ngOnInit(): void {
    //for navigation between each day's element
    this.navig.startSaveHistory();
    this.set2022();
    // this.showModal();


    // alert('today ' + this.today + ' this.day ' + this.day)
    let difference = +this.decemberFirst - +this.today;
    this.noOfDaysToAdvent = Math.ceil(difference / this.millisecondsDay);



    // -----------

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.hideModal()
  }


  // -----------


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


  // -----------


  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal?.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
  // -----------

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
