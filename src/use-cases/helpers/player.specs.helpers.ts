import {PlayerDTO} from '@adapters/types/player.types'
import {PlayerRepository} from '@external/db/player.repository'
import {faker} from '@faker-js/faker'
import {PlayerUseCase} from '../player.use-case'
import {AuthStrategy} from './auth.strategy'

export const genFakeUser = (): PlayerDTO => ({
    password: faker.internet.password(),
    username: faker.internet.userName(),
})
export const genRepository = () => new PlayerRepository()
export const genUseCase = (repository: PlayerRepository) =>
    new PlayerUseCase(repository, new AuthStrategy())
