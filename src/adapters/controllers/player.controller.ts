import {PlayerUseCase} from 'use-cases/player.use-case'

export class PlayerController {
    constructor(private useCase: PlayerUseCase, public route: () => void) {}
}
