import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(private http: HttpClient) {}

  findByIds$(actorIds: number[]) {
    const params = actorIds.map((actorId) => `id=${actorId}`)
    return this.http.get<any>(`${environment.db_url}actors?${params.join('&')}`)
  }
}
