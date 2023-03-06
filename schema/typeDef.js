const {gql} = require('apollo-server')

const typeDefs = gql`

    input CreatedUserInput{
       
        username:String!
        name:String!
        age:Int!
        nationality:Nationality
        
    }

    input UpdatedUserNameInput{
        id:ID!
        newUsername:String!
    }

    input UpdatedNameInput{
        id:ID!
        newName:String!
    }
    input UpdatedAgeInput{
        id:ID!
        newAge:Int!
    }
    input UpdatedNationalityInput{
        id:ID!
        newNationality:Nationality!
    }

    type User{
        id:ID!
        username:String!
        name:String!
        age:Int!
        nationality:Nationality
        favoriteMovie:[Movie]
        friends:[User]
    }

    


    type Query{
        getAllUsers: [User!]!
        getOneUser(id:ID!): User
        allMovies:[Movie!]!
        getOneMovie(name:String!): Movie
        # getOneUser(id:ID!): User!
    }


    type Mutation{
        createUser(input:CreatedUserInput!): User!
        updatedUserName(input:UpdatedUserNameInput!):User
        updatedName(input:UpdatedNameInput!):User!
        updatedAge(input:UpdatedAgeInput!):User!
        updatedNationality(input:UpdatedNationalityInput!):User!
        deleteUser(id:ID!):User
    }

    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!

    }

    enum Nationality {
        CANADA
        USA
        GHANA
        BRAZIL
    }

   



`

module.exports = typeDefs

