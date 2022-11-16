import {playerRepository, PlayerRepository} from 'external/db/player.repository'

class PlayerPresenter {
    constructor(private repository: PlayerRepository) {}
    /**
     * Get Players
     */
    public getPlayers() {
        return this.repository.players
    }
}

export const playerPresenter = new PlayerPresenter(playerRepository)
