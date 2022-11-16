import {CustomError} from './custom.error'

export function checkDTO(
    dto: Record<string, any>,
    fields?: keyof typeof dto[],
) {
    const errorMessages: string[] = []
    const incrementMessage = (field: keyof typeof dto) =>
        errorMessages.push(`Field '${field}' must be provided.`)
    if (fields) {
        // @ts-ignore
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
