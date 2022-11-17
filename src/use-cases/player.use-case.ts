import {PlayerDTO, PlayerViewModel} from '@adapters/types/player.types'
import {playerRepository} from '@external/db/player.repository'
import {PlayerFactory} from './player.factory'

export class PlayerUseCase {
    constructor(private respository: typeof playerRepository) {}
    public createPlayer(player: PlayerDTO): PlayerViewModel {
        const newPlayer = new PlayerFactory(player).create()
        this.respository.registerPlayer(newPlayer)

        return newPlayer
    }
}

export const playerUseCase = new PlayerUseCase(playerRepository)
