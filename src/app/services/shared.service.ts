import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   //used to pass actual id from selected pinned card to patient details
   private clickedDayId = new BehaviorSubject<string>('');
   currentId = this.clickedDayId.asObservable();
 
   updateId(newId: string) {
     this.clickedDayId.next(newId);
   }
 
}
