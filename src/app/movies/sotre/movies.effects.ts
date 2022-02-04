import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { environment } from "src/environments/environment";
import * as MoviesActions from './movies.atcions'

@Injectable()
export class MoviesEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MoviesActions.loadMovies),
            concatMap(() =>
                this.http.get<any>(`${environment.db_url}movies`).pipe(
                    map(res =>
                        MoviesActions.loadMoviesSuccess({ movies: res })
                    ),
                    catchError(_ =>
                        of(MoviesActions.loadMoviesError({ movies: [] }))
                    )
                )
            )
        )
    )

    constructor(private actions$: Actions, private http: HttpClient) { }
}