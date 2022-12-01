import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUserForm = 'https://mailthis.to/bucuriedeadvent';
  
  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.apiUserForm, input, { responseType: 'text' })
      .pipe(map((res: any) => {
        if (res) {
          {
            return res;
          }
        }
      },
        (error: any) => {
          return error;
        }
      ))
  }

 
}
