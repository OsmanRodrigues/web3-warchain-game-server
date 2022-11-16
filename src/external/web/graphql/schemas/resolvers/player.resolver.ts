import {playerPresenter} from '@adapters/presenters/player.presenter'

export const playerQuery = {
    players: () => playerPresenter.getPlayers(),
}
