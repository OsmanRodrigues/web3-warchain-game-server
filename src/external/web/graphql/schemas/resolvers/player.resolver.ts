import {playerController} from '@adapters/controllers/player.controller'
import {playerPresenter} from '@adapters/presenters/player.presenter'
import {PlayerDTO} from '@adapters/types/player.types'
import {HttpSuccessCode} from '@utils/http-codes'
import {resolverMutationMiddleware} from './helpers/middlewares.resolver'

export const playerQuery = {
    players: () => playerPresenter.getPlayers(),
}

export const playerMutation = {
    createPlayer: (_: unknown, player: PlayerDTO) =>
        resolverMutationMiddleware(() => {
            playerController.createPlayer(player)
            return {info: 'Created', code: HttpSuccessCode.Created}
        }),
}
