import {HttpErrorCode, HttpSuccessCode} from '@utils/http-codes'

interface Result {
    code?: HttpSuccessCode | HttpErrorCode
}

export interface SuccessResult extends Result {
    info?: keyof typeof HttpSuccessCode
}

export interface ErrorResult extends Result {
    error?: keyof typeof HttpErrorCode
}
