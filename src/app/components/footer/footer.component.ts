import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = false;
  // -----------
  registerForm!: FormGroup;
  submitted = false;
  // -----------
  today = new Date();
  decemberFirst = new Date(this.today.getFullYear(), 11, 1);
  millisecondsDay = 1000 * 60 * 60 * 24;
  noOfDaysToAdvent: number = 0;
  // -----------

  day = this.today.getDate();
  month = this.today.getMonth() + 1;

  // -----------  
  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }
  formValue = localStorage.getItem('form-data');

  ngOnInit(): void {
    // localStorage.clear();
    // if (!this.formValue) {
    //   this.showModal();
    // }
    this.registerForm = this.formBuilder.group(
      {
        full_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        acceptTerms: [false, Validators.requiredTrue]
      });
    let difference = +this.decemberFirst - +this.today;
    this.noOfDaysToAdvent = Math.ceil(difference / this.millisecondsDay);
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let user = {
      name: this.registerForm.value.full_name, email: this.registerForm.value.email,
    }
    this.contactService.postMessage(user)
      .subscribe(() => {
        localStorage.setItem('form-data', JSON.stringify([this.registerForm.value.full_name, this.registerForm.value.email]));

        location.href = 'https://mailthis.to/confirm';
        this.hideModal();
      }
        , error => {
          console.warn(error.responseText)
          console.log({ error })
        }
      )
  }


  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
    this.hideModal()
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal?.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

}
