import {Match} from '@entities/match'

export interface MatchDTO extends Match {
    guest?: string
}

export type MatchViewModel = Pick<MatchDTO, 'id' | 'owner' | 'status'>
