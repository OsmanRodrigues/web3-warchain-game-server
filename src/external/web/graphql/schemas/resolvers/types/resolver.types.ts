import {CustomError} from '@utils/custom.error'

export interface SuccessResult {
    info: string
}

export interface ErrorResult {
    error: string
    code: number | null
}
