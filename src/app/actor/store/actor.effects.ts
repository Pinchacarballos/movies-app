import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { environment } from '../../../environments/environment'
import * as ActorActions from './actor.atcions'

@Injectable()
export class ActorEffects {
  loadActors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActorActions.loadActors),
      switchMap(() =>
        this.http.get<any>(`${environment.db_url}actors`).pipe(
          map((res) => ActorActions.loadActorsSuccess({ actors: res })),
          catchError(() => of(ActorActions.loadActorsError({ actors: [] })))
        )
      )
    )
  )

  constructor(private actions$: Actions, private http: HttpClient) {}
}
