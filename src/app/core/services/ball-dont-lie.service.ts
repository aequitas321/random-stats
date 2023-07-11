import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ITeam } from '../models/ITeam';
import { IApiWrapper } from '../models/iapiWrapper';

@Injectable({
  providedIn: 'root'
})
export class BallDontLieService {
  ballDontLieUrl: string = 'https://www.balldontlie.io';

  constructor(
    private httpService: HttpClient
  ) { }

  getAllNBATeams(): Observable<ITeam[]> {
    return this.httpService.get<IApiWrapper<ITeam[]>>(`${this.ballDontLieUrl}/api/v1/teams`)
    .pipe(
      map((response) => {
        return <ITeam[]>response.data;
      }),
      catchError(this.handleError('getAllNBATeams', [])));
  }

  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
