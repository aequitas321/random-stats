import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, catchError, throwError, filter, map, of, Subject, tap } from 'rxjs';
import { ITeam } from '../models/ITeam';

@Injectable({
  providedIn: 'root'
})
export class BallDontLieService {
  ballDontLieUrl: string = 'https://www.balldontlie.io';

  constructor(
    private httpService: HttpClient
  ) { }

  // TODO: Make a Model for an NBA team to type this properly:
  getAllNBATeams(): Observable<ITeam[]> {
    return this.httpService.get<any>(`${this.ballDontLieUrl}/api/v1/teams`)
    .pipe(
      map(function(response){
        return <ITeam[]>response.data;
      }),
      tap(t => console.log(t)),
      catchError(this.handleError('getAllNBATeams', [])));
  }
  // TODO: Fix CORS errors
  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
