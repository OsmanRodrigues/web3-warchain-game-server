import {playerQuery} from './player.resolver'

export const resolvers = {
    Query: {
        ...playerQuery,
    },
}
