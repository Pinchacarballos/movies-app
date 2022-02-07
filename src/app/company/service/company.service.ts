import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  findByMovie$(movieId: number) {
    return this.http
      .get<any>(`${environment.db_url}companies?movies_like=${movieId}`)
      .pipe(map((company) => company[0]))
  }
}
