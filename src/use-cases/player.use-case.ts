import {PlayerDTO, PlayerViewModel} from '@adapters/types/player.types'
import {playerRepository} from '@external/db/player.repository'
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
            throw new CustomError({
                error: findPlayerResult.error,
                code: findPlayerResult.code,
                message: 'Player not found.',
            })

        const isValidPwd = this.strategy.authPassword(
            credentials.password!,
            findPlayerResult.data.password!,
        )

        if (isValidPwd) return findPlayerResult.data
        else
            throw new CustomError({
                error: 'Unauthorized',
                message: 'Invalid password.',
                code: HttpErrorCode.Unauthorized,
            })
    }
}

export const playerUseCase = new PlayerUseCase()
