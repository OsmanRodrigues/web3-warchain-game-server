import {playerMutation, playerQuery} from './player.resolver'
import {union} from './helpers/union.resolver'

export const resolvers = {
    ...union,
    Query: {
        ...playerQuery,
    },
    Mutation: {
        ...playerMutation,
    },
}
