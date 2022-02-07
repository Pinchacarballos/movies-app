import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map, of, switchMap } from 'rxjs'
import * as MovieActions from './movie.atcions'
import { ActorService } from '../../actor/service/actor.service'
import { CompanyService } from 'src/app/company/service/company.service'

@Injectable()
export class MovieEffects {
  findActors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.findActors),
      concatMap((action) =>
        this.actorService.findByIds$(action.actorIds).pipe(
          map((actors) => MovieActions.findActorsSuccess({ actors })),
          catchError((_) => of(MovieActions.findActorsError({ actors: [] })))
        )
      )
    )
  )

  findCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.findCompany),
      concatMap((action) =>
        this.companyService.findByMovie$(action.movieId).pipe(
          map((company) => MovieActions.findCompanySuccess({ company })),
          catchError((_) => of(MovieActions.findCompanyError({})))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private actorService: ActorService,
    private companyService: CompanyService
  ) {}
}
