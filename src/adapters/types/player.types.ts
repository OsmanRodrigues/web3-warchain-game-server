export interface PlayerDTO {
    username: string
    password: string
}

export type PlayerViewModel = Pick<PlayerDTO, 'username'>
