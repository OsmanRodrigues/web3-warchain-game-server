import {ErrorResult, SuccessResult} from '../types/resolver.types'

export function resolverMutationMiddleware(
    resolver: () => SuccessResult,
): SuccessResult | ErrorResult {
    try {
        return resolver()
    } catch (err: any) {
        return err
    }
}
