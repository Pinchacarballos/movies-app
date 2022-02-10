import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
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
import * as fromCompany from './company/store/company.reducer'
import * as fromActor from './actor/store/actor.reducer'

import { EffectsModule } from '@ngrx/effects'
import { AppService } from './shared/root.service'
import { ActorEffects } from './actor/store/actor.effects'
import { CompanyEffects } from './company/store/company.effects'
import { MovieEffects } from './movie/store/movie.effects'

const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [fromApp.appFeatureKey]: fromApp.reducer,
      [fromActor.actorFeatureKey]: fromActor.reducer,
      [fromCompany.companyFeatureKey]: fromCompany.reducer
    }),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([ActorEffects, CompanyEffects, MovieEffects]),
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
