import {CustomError} from './custom.error'

export function checkDTO<DTO = Record<string, string>>(
    dto: DTO,
    fields?: (keyof typeof dto)[],
) {
    const errorMessages: string[] = []
    const incrementMessage = (field: keyof typeof dto) =>
        errorMessages.push(`Field '${String(field)}' must be provided.`)
    if (fields) {
        for (const field of fields) {
            if (!dto[field]) incrementMessage(field)
        }
    } else {
        for (const field in dto) {
            if (!dto[field]) incrementMessage(field)
        }
    }

    if (errorMessages.length)
        throw new CustomError({
            error: errorMessages.join(' \n '),
            code: 400,
        })
}
