import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, catchError, throwError, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallDontLieService {
  ballDontLieUrl: string = 'https://balldontlie.io';

  constructor(
    private httpService: HttpClient
  ) { }

  // TODO: Make a Model for an NBA team to type this properly:
  getAllNBATeams(): Observable<any> {
    return this.httpService.get(`${this.ballDontLieUrl}/api/v1/teams`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in BallDontLieService GET All Teams method');
    })
    )
  }
  // TODO: Fix CORS errors

}
