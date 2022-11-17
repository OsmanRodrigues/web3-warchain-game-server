import {PlayerViewModel} from '@adapters/types/player.types'
import {
    ErrorResult,
    SuccessResult,
} from '@external/web/graphql/schemas/resolvers/types/resolver.types'

interface PlayerRepositoryData extends PlayerViewModel {
    password?: string
}

export interface PlayerRepositorySuccess extends SuccessResult {
    data: PlayerRepositoryData
}
export interface PlayerRepositoryError extends ErrorResult {
    data: PlayerRepositoryData
}
