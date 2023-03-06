const UserList = require('../models/FakeData')
const MovieList = require('../models/MovieData')
const _ = require('lodash');


const resolvers  = {

    Query:{
        getAllUsers:()=>{
            return UserList
        }, 
        getOneUser:(parent, args)=>{
            const idFromUser = args.id
            const foundUser = _.find(UserList, {id:Number(idFromUser)})
            return foundUser;

        }, 

        allMovies:()=>{
            return MovieList

        },

        getOneMovie:(parent, args)=>{
            const nameFromRequest = args.name
            const foundMovie = _.find(MovieList, {name:nameFromRequest.toString()})
             return foundMovie;
        }


    }, 





    // resolvers to handle favorite movie of Users. 
    //  remember we need to create the a new resolver 
    // because the type Movie we used in the schema of "User" is a custom type
    
    User: {
        favoriteMovie:()=>{
            return _.filter(MovieList, (movie)=>{
                return  movie.isInTheaters == false
            })


        }


    }, 

    Mutation:{
        createUser:(parent, args)=>{
            const newUserInfo = args.input
            const _id = UserList[UserList.length - 1].id
            newUserInfo.id = _id + 1
            UserList.push(newUserInfo)
            return newUserInfo;
        }, 
        updatedUserName:(parent, args)=>{
            const {id, newUsername} = args.input;
            
            const foundUser = _.find(UserList, {id:Number(id)})
           
            

            
            // foundUser.name = name
            // return foundUser

        }, 
        updatedName:(parent, args)=>{
            const {id, newName} = args.input;
            
            const foundUser = _.find(UserList, {id:Number(id)})
            foundUser.name = newName;
            return foundUser
            


        }, 
        updatedAge:(parent, args)=>{
            const {id, newAge} = args.input;
            
            const foundUser = _.find(UserList, {id:Number(id)})
            foundUser.age = newAge;
            return foundUser
            

        }, 
        updatedNationality:(parent, args)=>{
            const {id, newNationality} = args.input;
            
            const foundUser = _.find(UserList, {id:Number(id)})
            foundUser.username = newNationality;
            return foundUser
            

        }, 
        deleteUser:(parent, args)=>{
            const uid = args.id;
            console.log(uid)
            _.remove(UserList, (user)=> user.id === Number(uid))
            return null
        }

    }





}


module.exports = resolvers