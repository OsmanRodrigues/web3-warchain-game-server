import {PlayerDTO} from '@adapters/types/player.types'
import {HttpErrorCode, HttpSuccessCode} from '@utils/http-codes'
import {PlayerRepositorySuccess, PlayerRepositoryError} from './db.types'

type RepositoryMethodReturn = PlayerRepositorySuccess & PlayerRepositoryError

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
    public findPlayer(username: string): RepositoryMethodReturn {
        const dbResult = this.playerDB.find(
            player => player.username === username,
        )
        if (dbResult)
            return {info: 'Found', data: dbResult, code: HttpSuccessCode.Found}
        return {
            error: 'Not Found',
            code: HttpErrorCode['Not Found'],
            data: {username},
        }
    }

    public get players() {
        return this.playerDB
    }
}

export const playerRepository = new PlayerRepository()
