import {PlayerDTO, PlayerViewModel} from '@adapters/types/player.types'
import {
    playerRepository,
    RepositoryMethodReturn,
} from '@external/db/player.repository'
import {SuccessResult} from '@external/web/graphql/schemas/resolvers/types/resolver.types'
import {CustomError} from '@utils/custom.error'
import {HttpErrorCode} from '@utils/http-codes'
import {authStrategy} from './helpers/auth.strategy'
import {PlayerFactory} from './player.factory'

export class PlayerUseCase {
    constructor(
        private respository: typeof playerRepository = playerRepository,
        private strategy: typeof authStrategy = authStrategy,
    ) {}
    public createPlayer(player: PlayerDTO): PlayerViewModel {
        const newPlayer = new PlayerFactory(player).create()
        this.respository.registerPlayer(newPlayer)

        return newPlayer
    }
    public authPlayer(credentials: PlayerDTO): PlayerViewModel {
        const findPlayerResult = this.respository.findPlayer(
            credentials.username,
        )

        if (findPlayerResult.error === 'Not Found')
            throw this.genNotFoundError(findPlayerResult)

        const isValidPwd = this.strategy.authPassword(
            credentials.password!,
            findPlayerResult.data!.password!,
        )

        if (isValidPwd) return findPlayerResult!.data!
        else
            throw new CustomError({
                error: 'Unauthorized',
                message: 'Invalid password.',
                code: HttpErrorCode.Unauthorized,
            })
    }
    public removePlayer(username: string): SuccessResult {
        const deletePlayerResult = this.respository.deletePlayer(username)
        if (deletePlayerResult.error === 'Not Found')
            throw this.genNotFoundError(deletePlayerResult)
        return deletePlayerResult
    }
    private genNotFoundError(result: RepositoryMethodReturn) {
        return new CustomError({
            error: result.error,
            code: result.code,
            message: 'Player not found.',
        })
    }
}

export const playerUseCase = new PlayerUseCase()
