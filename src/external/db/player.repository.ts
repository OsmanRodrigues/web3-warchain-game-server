import {PlayerDTO, PlayerViewModel} from '@adapters/types/player.types'
import {PlayerNotFindError} from './types/errors.player.repository'

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
    public findPlayer(username: string): PlayerViewModel | PlayerNotFindError {
        const dbResult = this.playerDB.find(
            player => player.username === username,
        )
        return dbResult ?? {error: 'Not find.', status: 404}
    }

    public get players() {
        return this.playerDB
    }
}

export const playerRepository = new PlayerRepository()
