import {PlayerDTO} from '@adapters/types/player.types'
import {Player} from '@entities/player'
import {checkDTO} from '@utils/check-dto.utils'

export class PlayerFactory {
    constructor(private player: Player) {}
    public create(): PlayerDTO {
        checkDTO(this.player)
        return this.player
    }
}
