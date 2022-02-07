import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { SharedModule } from './shared/shared.module'
import * as fromApp from './shared/root.reducer'
import { EffectsModule } from '@ngrx/effects'
import { AppService } from './shared/root.service'

const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'es'
    })
  ],
  providers: [TranslateService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
