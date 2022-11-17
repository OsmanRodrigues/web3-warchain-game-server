import {ErrorResult} from '@external/web/graphql/schemas/resolvers/types/resolver.types'

export class CustomError extends Error implements ErrorResult {
    error: ErrorResult['error'] = undefined
    code: ErrorResult['code'] = undefined
    message = ''
    constructor(args: {
        error: ErrorResult['error']
        code?: ErrorResult['code']
        message: string
    }) {
        super(args.error)
        this.error = args.error
        this.message = args.message
        if (args.code) this.code = args.code
    }
}
