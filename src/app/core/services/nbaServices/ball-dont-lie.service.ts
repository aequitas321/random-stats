import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ITeam } from '../../models/nba/iteam';
import { IApiWrapper } from '../../models/common/iapiWrapper';
import { HelperService } from '../sharedServices/helper.service';

@Injectable({
  providedIn: 'root'
})
export class BallDontLieService {
  ballDontLieUrl: string = 'https://www.balldontlie.io/api/v1';

  constructor(
    private httpService: HttpClient,
    private helper: HelperService
  ) { }

  getAllNBATeams(): Observable<ITeam[]> {
    return this.httpService.get<IApiWrapper<ITeam[]>>(`${this.ballDontLieUrl}/teams`)
      .pipe(
        map((response) => {
          return <ITeam[]>response.data;
        }),
        catchError(this.helper.handleError('getAllNBATeams', [])));
  }

  getNBATeamById(id: number): Observable<ITeam> {
    return this.httpService.get<ITeam>(`${this.ballDontLieUrl}/teams/${id}`)
      .pipe(
        catchError(this.helper.handleError('getNBATeamById', <ITeam>{}))
      )

  }
}
