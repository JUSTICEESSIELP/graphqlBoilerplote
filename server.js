const {ApolloServer}  = require('apollo-server')
const resolvers = require('./schema/resolve')
const typeDefs = require('./schema/typeDef')


const server = new  ApolloServer({typeDefs, resolvers})


server.listen().then(({url})=>{
    console.log(`You API is RUNNING ${url}`)
})