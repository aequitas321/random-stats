import { Component, OnInit } from '@angular/core';
import { BallDontLieService } from './core/services/ball-dont-lie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'random-stats';
  allTeams: any;

  constructor(
    private ballDontLieService: BallDontLieService
  ) {}


  ngOnInit(): void {
    this.allTeams = this.ballDontLieService.getAllNBATeams();
    console.log("allTeams", this.allTeams)
  }
}
