import { Component, OnInit } from '@angular/core';
import { BallDontLieService } from './core/services/ball-dont-lie.service';
import { ITeam } from './core/models/ITeam';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'random-stats';
  allTeams$: Observable<ITeam[]>;

  constructor(
    private ballDontLieService: BallDontLieService
  ) {
    this.allTeams$ = this.ballDontLieService.getAllNBATeams();
  }
}
