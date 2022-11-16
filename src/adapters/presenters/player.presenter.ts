import {playerRepository} from 'external/db/player.repository'

class PlayerPresenter {
    constructor(private repository: typeof playerRepository) {}
    /**
     * Get Players
     */
    public getPlayers() {
        return this.repository.players
    }
}

export const playerPresenter = new PlayerPresenter(playerRepository)
