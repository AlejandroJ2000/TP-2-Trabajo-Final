import ProductsMemModel from './DAO/products.MemModel.js'
import ProductsMongoModel from './DAO/products.MongoModel.js'

import UsersMemModel from './DAO/users.MemModel.js'
import UsersMongoModel from './DAO/users.MongoModel.js'

class Factory {
    static createProductDAO(persistence) {
        switch (persistence) {
            case "mongo":
                console.log("Usando persistencia MongoDB para productos")
                return new ProductsMongoModel
            case "memory":
                console.log("Usando persistencia en memoria para productos")
                return new ProductsMemModel()    
        }
    }

    static createUserDAO(persistence) {
        switch(persistence) {
            case "mongo":
                console.log("Usando persistencia MongoDB para usuarios")
                return new UsersMongoModel()
            case "memory":
                console.log("Usando persistencia en memoria para usuarios")
                return new UsersMemModel()      
        }
    }
}
export default Factory