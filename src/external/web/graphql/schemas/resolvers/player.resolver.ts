import {playerController} from '@adapters/controllers/player.controller'
import {playerPresenter} from '@adapters/presenters/player.presenter'
import {PlayerDTO} from '@adapters/types/player.types'
import {resolverMutationMiddleware} from './helpers/middlewares.resolver'

export const playerQuery = {
    players: () => playerPresenter.getPlayers(),
}

export const playerMutation = {
    createPlayer: (_: any, player: PlayerDTO) =>
        resolverMutationMiddleware(() => {
            playerController.createPlayer(player)
            return {info: `Player '${player.username}' successfully created!`}
        }),
}
