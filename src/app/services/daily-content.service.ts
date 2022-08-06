import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyContentService {

  constructor( private http: HttpClient) { }


  getCraft():Observable<Object> {
   return this.http.get('../../../assets/jsonContent/craft.json');
  }

  getSong(){
   return this.http.get('../../../assets/jsonContent/songs.json');
  }
  getStory(){
    return this.http.get('../../../assets/jsonContent/story.json');
  }
}
