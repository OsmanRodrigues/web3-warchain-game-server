import {genFakeUser} from '../player/player.specs.helpers'
import {expect} from 'chai'
import {genManager, genUseCase} from './match.specs.helpers'

const matchManager = genManager()
const matchUseCase = genUseCase(matchManager)

describe('# Match Use Cases', () => {
    context('~ Create', () => {
        it('Should create a match', () => {
            const fakeUser = genFakeUser()
            const result = matchUseCase.createMatch(fakeUser.username)
            expect(result).to.have.a.property('id').that.is.a('string')
            expect(result).to.have.a.property('owner').that.is.a('string')
            expect(result).to.have.a.property('status').that.is.a('string')
            expect(result.owner).deep.equal(fakeUser.username)
        })
    })
})
