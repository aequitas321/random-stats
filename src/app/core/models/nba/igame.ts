import { ITeam } from "./iteam";

export interface IGame {
    id: number,
    date: Date,
    home_team_score: number,
    visitor_team_score: number,
    season: number,
    period: number,
    status: string,
    time: string,
    postseason: boolean,
    home_team: ITeam,
    visitor_team: ITeam
}