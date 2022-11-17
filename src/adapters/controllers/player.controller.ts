import {PlayerDTO} from '../types/player.types'
import {playerUseCase} from '@use-cases/player.use-case'

export class PlayerController {
    constructor(private useCase: typeof playerUseCase) {}
    public createPlayer(player: PlayerDTO) {
        return this.useCase.createPlayer(player)
    }
}

export const playerController = new PlayerController(playerUseCase)
