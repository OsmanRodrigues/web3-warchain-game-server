import {PlayerController} from '@adapters/controllers/player.controller'
import {Player} from '@entities/player'

export class PlayerUseCase {
    constructor(private player: Player, private controller: PlayerController) {}
}
