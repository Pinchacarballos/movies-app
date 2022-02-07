import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'
import { NavigationService } from './shared/navigation.service'
import { AppService } from './shared/root.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title$: Observable<string>

  constructor(
    private appService: AppService,
    private translateService: TranslateService,
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.translateService
      .get('movies')
      .subscribe((translation) => this.appService.setTitle(translation))
    this.title$ = this.appService.getTitle$()
    this.navigationService.startSaveHistory()
  }

  canGoBack() {
    console.log(this.navigationService.getHistory())
    return this.navigationService.getHistory().length > 1
  }
}
