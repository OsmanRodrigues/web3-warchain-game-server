import {MatchMasterSlave} from './match.master-slave'
import {MatchStore} from './match.store'
import {MatchUseCase} from './match.use-case'

export const genManager = () => new MatchMasterSlave(new MatchStore())
export const genUseCase = (manager: MatchMasterSlave) =>
    new MatchUseCase(manager)
