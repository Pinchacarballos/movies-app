import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { switchMap } from 'rxjs'
import { environment } from '../../../environments/environment'
import * as ActorActions from './actor.atcions'

@Injectable()
export class ActorEffects {
  findById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActorActions.findById),
      switchMap((action) => {
        const params = action.actorIds.map((actorId) => `id=${actorId}`)
        return this.http.get<any>(`${environment.db_url}actors?${params}`)
      })
    )
  })

  constructor(private actions$: Actions, private http: HttpClient) {}
}
