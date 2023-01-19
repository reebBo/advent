import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = false;
  // -----------
  form!: FormGroup;
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
  constructor(private formBuilder: FormBuilder) { }
  // formValue = localStorage.getItem('form-data');


  ngOnInit(): void {
    // localStorage.clear();

    // this.form = this.formBuilder.group(
    //   {
    //     full_name: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     acceptTerms: [false, Validators.requiredTrue]
    //   });
    let difference = +this.decemberFirst - +this.today;
    this.noOfDaysToAdvent = Math.ceil(difference / this.millisecondsDay);
  }



  // database
  // return this.httpClient.get('https://reeb.dk/users.php', { params: user })
  //   .pipe(
  //     map(a => alert('hghgy '+JSON.stringify(a)))
  //   )
  //   .subscribe(resp => {
  //     console.log("hello", resp);
  //     this.hideModal();
  //   });

}



