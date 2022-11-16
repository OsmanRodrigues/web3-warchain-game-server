import {ErroResult, SuccessResult} from '../types/resolver.types'

export function resolverMutationMiddleware(
    resolver: () => SuccessResult,
): SuccessResult | ErroResult {
    try {
        return resolver()
    } catch (err: any) {
        return err
    }
}
