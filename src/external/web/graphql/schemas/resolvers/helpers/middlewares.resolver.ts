import {CustomError} from '@utils/custom.error'
import {GraphQLError} from 'graphql'
import {ErrorResult, SuccessResult} from '../types/resolver.types'

export function resolverMutationMiddleware(
    resolver: () => SuccessResult,
): SuccessResult | ErrorResult {
    try {
        return resolver()
    } catch (err: unknown) {
        const {code, error, message} = err as CustomError

        throw new GraphQLError(message, {
            extensions: {code, error},
        })
    }
}
