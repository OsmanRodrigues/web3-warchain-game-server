import {Match} from '@entities/match'

export class MatchStore {
    constructor(private _matches: Map<string, Match> = new Map()) {}
    public setMatch(id: string, match: Match) {
        this._matches.set(id, match)
    }
    public getMatch(id: string) {
        return this._matches.get(id)
    }
    public get matches() {
        return this._matches
    }
}
