import {expect} from 'chai'
import {genFakeUser} from './helpers/player.specs.helpers'
import {playerUseCase} from './player.use-case'

describe('# Player Use Cases', () => {
    context('~ Create', () => {
        it('Should create a player', () => {
            const fakeUser = genFakeUser()
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
    context('~ Auth', () => {
        const fakeUser = genFakeUser()
        playerUseCase.createPlayer(fakeUser)
        it('Should return "valid credentials" info', () => {
            const result = playerUseCase.authPlayer(fakeUser)
            expect(result)
                .to.have.a.property('username')
                .that.is.a('string')
                .and.deep.equals(fakeUser.username)
        })
        it('Should throw "invalid password" error', () => {
            expect(() =>
                playerUseCase.authPlayer({
                    ...fakeUser,
                    password: 'invalid_pwd',
                }),
            ).to.throw(/Invalid password/)
        })
        it('Should throw "not found" error', () => {
            expect(() =>
                playerUseCase.authPlayer({
                    ...fakeUser,
                    username: 'invalid_user',
                }),
            ).to.throw(/not found/)
        })
    })
    context('~ Remove', () => {
        const fakeUser = genFakeUser()
        playerUseCase.createPlayer(fakeUser)
        it('Should remove a player', () => {
            const result = playerUseCase.removePlayer(fakeUser.username)
            expect(result)
                .to.have.a.property('info')
                .that.is.a('string')
                .and.deep.equals('Ok')
        })
        it('Should throw "not found" error', () => {
            expect(() => playerUseCase.removePlayer('invalid_user')).to.throw(
                /not found/,
            )
        })
    })
})
