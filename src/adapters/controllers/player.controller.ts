import {PlayerDTO} from '../types/player.types'
import {playerUseCase} from '@use-cases/player/player.use-case'

export class PlayerController {
    constructor(private useCase: typeof playerUseCase) {}
    public createPlayer(player: PlayerDTO) {
        return this.useCase.createPlayer(player)
    }
    public authPlayer(player: PlayerDTO) {
        return this.useCase.authPlayer(player)
    }
    public removePlayer(username: string) {
        return this.useCase.removePlayer(username)
    }
}

export const playerController = new PlayerController(playerUseCase)
