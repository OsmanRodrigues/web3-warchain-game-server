import {MatchViewModel} from '@adapters/types/match.types'
import {MatchStore} from './match.store'
import {randomUUID} from 'crypto'
import {Match} from '@entities/match'
import {MatchStatus} from './types'

export class MatchMasterSlave {
    constructor(private store: MatchStore) {}
    public createMatch(ownerUsername: string): MatchViewModel {
        const matchId = randomUUID()
        const newMatch = new Match(matchId, ownerUsername, MatchStatus.idle)
        this.store.setMatch(matchId, newMatch)
        const {id, owner, status} = newMatch

        return {id, owner, status}
    }
}

export const matchMasterSlave = new MatchMasterSlave(new MatchStore())
