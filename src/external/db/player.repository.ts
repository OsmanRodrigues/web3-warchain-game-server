import {PlayerDTO} from '@adapters/types/player.types'
import {HttpErrorCode, HttpSuccessCode} from '@utils/http-codes'
import {PlayerRepositorySuccess, PlayerRepositoryError} from './db.types'

export type RepositoryMethodReturn = PlayerRepositorySuccess &
    PlayerRepositoryError

export class PlayerRepository {
    private playerDB: PlayerDTO[] = []
    private notFoundResponse: PlayerRepositoryError = {
        error: 'Not Found',
        code: HttpErrorCode['Not Found'],
    }

    public registerPlayer(player: PlayerDTO) {
        this.playerDB.push(player)
    }
    public findPlayer(username: string): RepositoryMethodReturn {
        const dbResult = this.playerDB.find(
            player => player.username === username,
        )
        if (dbResult)
            return {info: 'Found', data: dbResult, code: HttpSuccessCode.Found}
        return {
            ...this.notFoundResponse,
            data: {username},
        }
    }
    public deletePlayer(username: string): RepositoryMethodReturn {
        const findResult = this.findPlayer(username)
        if (findResult.info === 'Found') {
            this.playerDB = this.playerDB.filter(
                player => player.username != username,
            )
            return {
                info: 'Ok',
                data: {username: findResult.data!.username},
            }
        } else return findResult
    }
    public get players() {
        return this.playerDB
    }
    /* For tests purposes */
    public resetDb() {
        this.playerDB = []
    }
}

export const playerRepository = new PlayerRepository()
