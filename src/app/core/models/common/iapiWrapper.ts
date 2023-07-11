import { IMeta } from "../nba/imeta";

export interface IApiWrapper<T> {
    data: T,
    meta?: IMeta 
}