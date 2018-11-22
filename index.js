import { ApolloServer, gql } from 'apollo-server'
import { mockVideoGames } from './data'
const PORT = process.env.PORT || 8080

const typeDefs = gql`
  type VideoGame {
    id: ID!
    title: String!
    developer: String!
    completed: Boolean!
  }

  type Query {
    videoGames: [VideoGame!]!
  }

  type Mutation {
    completeGame(id: ID!): VideoGame!
  }
`

let cache = {
  mockVideoGames
}

const resolvers = {
  Query: {
    videoGames: () => {
      return cache.mockVideoGames
    }
  },
  Mutation: {
    completeGame: (_, { id }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          let updatedGame
    
          cache.mockVideoGames = cache.mockVideoGames.map(videoGame => {
            if (videoGame.id === id) {
              updatedGame = Object.assign({}, videoGame, {
                completed: !videoGame.completed
              })
              return updatedGame
            }
    
            return videoGame
          })
    
          resolve(updatedGame)
        }, 500)
      })
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
