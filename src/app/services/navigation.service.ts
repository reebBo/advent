import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = []

  constructor(private router: Router, private location: Location) { }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      // alert('event ' + JSON.stringify(event))

      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  public getHistory(): string[] {
    return this.history;
  }

  public goBack(): void {
    // alert('this.history ' + JSON.stringify(this.history))

    this.history.pop();

    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl("/")
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }

    return '';
  }
}