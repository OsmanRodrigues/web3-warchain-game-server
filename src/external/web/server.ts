import express from 'express'
import http from 'http'
import cors from 'cors'
import {json} from 'body-parser'
import {ApolloServer} from '@apollo/server'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'
import {expressMiddleware} from '@apollo/server/express4'
import {typeDefs, resolvers} from './graphql/schemas'
import {route} from '../routes/route'

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
})
export async function serverHandler() {
    await server.start()
    app.use(
        route.main,
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(server),
    )
    await new Promise<void>(resolve => httpServer.listen({port: 4040}, resolve))
    console.log(`🚀  Server ready at http://localhost:4040/graphql`)
}
