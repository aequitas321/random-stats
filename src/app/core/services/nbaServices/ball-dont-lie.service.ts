import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ITeam } from '../../models/nba/iteam';
import { IApiWrapper } from '../../models/common/iapiWrapper';
import { HelperService } from '../sharedServices/helper.service';
import { IGame } from '../../models/nba/igame';
import { IPlayer } from '../../models/nba/iplayer';

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
        catchError(this.helper.handleError('getAllNBATeams', []))
      );
  }

  getNBATeamById(id: number): Observable<ITeam> {
    return this.httpService.get<ITeam>(`${this.ballDontLieUrl}/teams/${id}`)
      .pipe(
        catchError(this.helper.handleError('getNBATeamById', <ITeam>{}))
      )
  }

  getAllNBAGames(): Observable<IGame[]> {
    return this.httpService.get<IApiWrapper<IGame[]>>(`${this.ballDontLieUrl}/games`)
      .pipe(
        map((response) => {
          return <IGame[]>response.data
        }),
        catchError(this.helper.handleError('getAllNBAGames', []))
      )
  }

  getNBAGameByID(id: number): Observable<IGame> {
    return this.httpService.get<IGame>(`${this.ballDontLieUrl}/games/${id}`)
      .pipe(
        catchError(this.helper.handleError('getNBAGameById', <IGame>{}))
      )
  }

  getAllNBAPlayers(): Observable<IPlayer[]> {
    return this.httpService.get<IApiWrapper<IPlayer[]>>(`${this.ballDontLieUrl}/players`)
      .pipe(
        map((response) => {
          return <IPlayer[]>response.data
        }),
        catchError(this.helper.handleError('getAllNBAPlayers', []))
      )
  }

  getNBAPlayerById(id: number): Observable<IPlayer> {
    return this.httpService.get<IPlayer>(`${this.ballDontLieUrl}/players/${id}`)
      .pipe(
        catchError(this.helper.handleError('getNBAPlayerById', <IPlayer>{}))
      )
  }
}
