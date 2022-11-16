import {PlayerDTO} from '@adapters/types/player.types'
import {playerRepository} from 'external/db/player.repository'
import {PlayerFactory} from './player.factory'

export class PlayerUseCase {
    constructor(private respository: typeof playerRepository) {}
    public createPlayer(player: PlayerDTO) {
        const newPlayer = new PlayerFactory(player).create()
        this.respository.registerPlayer(newPlayer)
    }
}

export const playerUseCase = new PlayerUseCase(playerRepository)
