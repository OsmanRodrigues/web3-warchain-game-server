import {CustomError} from '@utils/custom.error'

export interface SuccessResult {
    info: string
}

export interface ErroResult {
    error: string
    code: number | null
}
