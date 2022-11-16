import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {typeDefs, resolvers} from './graphql/schemas'

const server = new ApolloServer({typeDefs, resolvers})
export async function serverHandler() {
    const {url} = await startStandaloneServer(server, {listen: {port: 4040}})
    console.log(`🚀  Server ready at ${url}`)
}
