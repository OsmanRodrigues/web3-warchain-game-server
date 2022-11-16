import {PlayerDTO} from '@adapters/controllers/player.controller.types'

export class PlayerRepository {
    private playerDB: PlayerDTO[] = []

    /**
     * Register Player
     */
    public registerPlayer(player: PlayerDTO) {
        this.playerDB.push(player)
    }

    /**
     * Find Player
     */
    public findPlayer(username: string) {
        return this.playerDB.find(player => player.username === username)
    }

    public get players() {
        return this.playerDB
    }
}
