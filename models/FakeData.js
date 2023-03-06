const UserList = [
    {
        id:1, 
        name:"John", 
        username:"john", 
        age:20, 
        nationality:"USA",
        friends:[

            {
                id:2, 
                name:"Pedro", 
                username:"PedroTech", 
                age:20, 
                nationality:"USA"
        
            }, 
            {
                id:4, 
                name:"Bless", 
                username:"dont fit in", 
                age:59, 
                nationality:"BRAZIL"
            }



        ]

    }, 



    {
        id:2, 
        name:"Pedro", 
        username:"PedroTech", 
        age:20, 
        nationality:"USA"

    }, 



    {
        id:3, 
        name:"Essiel", 
        username:"esiao", 
        age:20, 
        nationality: "BRAZIL",
        friends:[
            {
                id:2, 
                name:"Pedro", 
                username:"PedroTech", 
                age:20, 
                nationality:"BRAZIL"
            }
        ]
    }, 



    {
        id:4, 
        name:"Bless", 
        username:"dont fit in", 
        age:59, 
        nationality:"GHANA", 
        friends:[

            {
                id:3, 
                name:"Essiel", 
                username:"esiao", 
                age:20, 
                nationality: "USA"
            }, 

        ]
    }

]

module.exports = UserList