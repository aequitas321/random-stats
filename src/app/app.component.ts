import { Component, OnInit } from '@angular/core';
import { BallDontLieService } from './core/services/ball-dont-lie.service';
import { ITeam } from './core/models/ITeam';
import { Observable, map, of, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'random-stats';
  allTeams$: Observable<ITeam[]> = of([]);

  constructor(
    private ballDontLieService: BallDontLieService
  ) {}


  ngOnInit(): void {
    this.allTeams$ = this.ballDontLieService.getAllNBATeams();
  }
}
