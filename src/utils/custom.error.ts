import {ErrorResult} from '@external/web/graphql/schemas/resolvers/types/resolver.types'

export class CustomError extends Error implements ErrorResult {
    error = ''
    code: number | null = null
    constructor(args: {error: string; code?: number}) {
        super(args.error)
        this.error = args.error
        if (args.code) this.code = args.code
    }
}
