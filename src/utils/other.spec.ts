import {expect} from 'chai'
import {logger} from './other'

describe('# Initial test', () => {
    context('Utils testing', () => {
        it('Should call logger with a "hello world message"', done => {
            expect(logger).to.be.a('function')
            done()
        })
    })
})
