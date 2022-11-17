import {PlayerDTO} from '@adapters/types/player.types'
import {faker} from '@faker-js/faker'

export const genFakeUser = (): PlayerDTO => ({
    password: faker.internet.password(),
    username: faker.internet.userName(),
})
