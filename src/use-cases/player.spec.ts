import {expect} from 'chai'
import {playerUseCase} from './player.use-case'
import {faker} from '@faker-js/faker'

describe('# Player Use Cases', () => {
    context('~ Create', () => {
        it('Should create a player', () => {
            const fakeUser = {
                password: faker.internet.password(),
                username: faker.internet.userName(),
            }
            const result = playerUseCase.createPlayer(fakeUser)
            expect(result).to.have.a.property('username').that.is.a('string')
            expect(result.username).deep.equal(fakeUser.username)
        })
        it('Should throw an "property must be provided" error', () => {
            const fakeUser = {
                password: '',
                username: '',
            }
            expect(() => playerUseCase.createPlayer(fakeUser)).to.throw(
                /must be provided/,
            )
        })
    })
})
