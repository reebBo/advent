import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DailyContentService {

  private year: number = 0;

  constructor(private http: HttpClient) { }

  // getPinnedIDsFromWebService(): Observable<number[]> {
  //   const clinician = this.clinicianId();
  //   return this.http.get<any>(`/pins/${clinician}`).pipe(
  //     map(res => {
  //       this.webServicePinnedIds = res.map((elem: any) => elem.patient);
  //       return this.webServicePinnedIds;
  //     })
  //   );
  // }

getYear(){
  return this.year;
}

  // set the year, either by selecting the button on the page or current year
  setYear(selectedYear?: number): number {

    const d = new Date();
    let thisYear = d.getFullYear();

    if (selectedYear != undefined) {
      this.year = selectedYear;
    }
    else {
      this.year = thisYear;
    }
    return this.year;
  }

  getCraft(){
    let year = this.year.toString();//private property at the top
    return this.http.get('../../../assets/jsonContent/craft.json/').pipe(
      map((craftData: any) => {
        if (Object.keys(craftData).includes(year)) {
          // alert(JSON.stringify(craftData[year]['crafts']))
          return craftData[year]['crafts'];
        }
      })
    )
  }

  getSong() {
    let year = this.year.toString();//private property at the top
    return this.http.get('../../../assets/jsonContent/songs.json').pipe(
      map((songsData: any) => {
        if (Object.keys(songsData).includes(year)) {
          return songsData[year]['songs'];
        }
      })
    )
  }
  getStory() {
    let year = this.year.toString();//private property at the top
    return this.http.get('../../../assets/jsonContent/story.json').pipe(
      map((storiesData: any) => {
        if (Object.keys(storiesData).includes(year)) {
          return storiesData[year]['stories'];
        }
      })
    )
  }

  getMomsCorner() {
    let year = this.year.toString();//private property at the top
    return this.http.get('../../../assets/jsonContent/moms.json').pipe(
      map((momsData: any) => {
        if (Object.keys(momsData).includes(year)) {
          return momsData[year]['moms'];
        }
      })
    )
  }
}
