import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { map } from 'rxjs/operators';

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
  posts: any;
  // -----------
  today = new Date();
  decemberFirst = new Date(this.today.getFullYear(), 11, 1);
  millisecondsDay = 1000 * 60 * 60 * 24;
  noOfDaysToAdvent: number = 0;
  // -----------

  day = this.today.getDate();
  month = this.today.getMonth() + 1;

  // -----------
  // headers = new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*');
  headers = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // this.showModal();
    this.registerForm = this.formBuilder.group(
      {
        full_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        acceptTerms: [false, Validators.requiredTrue]
      });


    // alert('today ' + this.today + ' this.day ' + this.day)
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

    if (this.registerForm.value.acceptTerms) {
      this.registerForm.value.acceptTerms = 1;
    }
    // alert('if ---user ' + JSON.stringify(this.registerForm.value.acceptTerms))

    let user = {
      name: this.registerForm.value.full_name, email: this.registerForm.value.email,
      acceptTerms: this.registerForm.value.acceptTerms
    }

    // alert('user '+JSON.stringify(user))



    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // const httpParams: HttpParamsOptions = { fromObject: user } as HttpParamsOptions;
    // const options = { params: new HttpParams(httpParams), headers: headers };
    

    // return this.httpClient.get('http://localhost:8888/users.php', { params: user })
    return this.httpClient.get('https://reeb.dk/users.php', { params: user })
      .pipe(
        map(a => alert(a))
      )
      .subscribe(resp => {
        console.log("hello", resp);
        this.hideModal();
      });




    // return this.httpClient.post('http://localhost:8888/users.php', { params: user }, { 'headers': this.headers }).pipe(
    //   map((res: any) => {
    //     alert(JSON.stringify(res))
    //     return res['data'];
    //     // return res['data'];
    //   })
    // ).subscribe();
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
  // -----------

}
