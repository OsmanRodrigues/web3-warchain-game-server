export const union = {
    MutationResult: {
        __resolveType(obj: any) {
            // Only Author has a name field
            if (obj.info) {
                return 'Success'
            }
            // Only Book has a title field
            if (obj.error) {
                return 'Error'
            }
            return null // GraphQLError is thrown
        },
    },
}
