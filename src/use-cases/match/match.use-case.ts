import {MatchViewModel} from '@adapters/types/match.types'
import {matchMasterSlave, MatchMasterSlave} from './match.master-slave'

export class MatchUseCase {
    constructor(private manager: MatchMasterSlave = matchMasterSlave) {}
    public createMatch(ownerUsername: string): MatchViewModel {
        return this.manager.createMatch(ownerUsername)
    }
}
