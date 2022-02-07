import { Location } from '@angular/common'
import { Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = []

  constructor(private router: Router, private location: Location) {}

  startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  getHistory(): string[] {
    return this.history
  }

  goBack(): void {
    this.history.pop()

    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }

  getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2]
    }
    return ''
  }
}