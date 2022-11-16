import {PlayerDTO, PlayerViewModel} from '@adapters/types/player.types'
import {ErrorResult} from '../web/graphql/schemas/resolvers/types/resolver.types'

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
    public findPlayer(username: string): PlayerViewModel | ErrorResult {
        const dbResult = this.playerDB.find(
            player => player.username === username,
        )
        return dbResult ?? {error: 'Not find.', code: 404}
    }

    public get players() {
        return this.playerDB
    }
}

export const playerRepository = new PlayerRepository()
