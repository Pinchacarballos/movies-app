import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { ActorState } from '../store/actor.reducer'
import * as ActorActions from '../store/actor.atcions'
import * as ActorSelectors from '../store/actor.selectors'
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(private http: HttpClient, private store: Store<ActorState>) {}

  findByIds$(actorIds: number[]) {
    const params = actorIds.map((actorId) => `id=${actorId}`)
    return this.http.get<any>(`${environment.db_url}actors?${params.join('&')}`)
  }

  loadActors() {
    this.store.dispatch(ActorActions.loadActors())
  }

  getAll$() {
    this.store
      .select(ActorSelectors.getActors)
      .pipe(
        tap((data) => {
          !data.loading &&
            !data.error &&
            !data.actors?.length &&
            this.loadActors()
        })
      )
      .subscribe()
    return this.store.select(ActorSelectors.getActors)
  }
}
