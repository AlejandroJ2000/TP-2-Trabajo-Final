import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class ProductsMongoModel {
    constructor() {}

    getProducts = async () => {
        return await MongoConnection.db.collection("products").find({}).toArray()
    }

    getProductById = async (id) => {
        try {
            if(!ObjectId.isValid(id)) {
                throw new Error("ID inválido")
            }

            const product = await MongoConnection.db.collection("products").findOne({
            _id: new ObjectId(id)
            })
            if(!product) {
                throw new Error("Producto no encontrado")
            } else {
            return { message: "Producto encontrado!", product }
            }
        } catch(error) {
            throw new Error(`Error al obtener el producto especificado: ${error.message}`)
        }
    }

    postProduct = async (data) => {
        const newProduct = await MongoConnection.db.collection("products").insertOne(data)
        return { message: "Se ha agregado un nuevo producto correctamente", newProduct }
    }

    patchProduct = async (id, data) => {
        try {
            const product = await MongoConnection.db.collection("products").findOne({ 
                _id: new ObjectId(id)
            })
            if(!producto) {
                throw new Error("ID inválido")
            }
        
            const result = await MongoConnection.db.collection("products").updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            )
            if(result.modifiedCount === 0) {
                throw new Error("Producto no encontrado para modificar")
            } else {
                return "Producto actualizado correctamente"
            }
        } catch(error) {
            throw new Error(`Error al intentar actualizar el producto: ${error.message}`)
        }
    }

    updateProduct = async (id, data) => {
        if(!ObjectId.isValid(id)) {
            throw new Error("Producto no encontrado")
        } else {
            const result = await MongoConnection.db.collection("products").updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            )
            if(result.modifiedCount === 0) {
                throw new Error("No se actualizó nada")
            } else{
                return result
            }
        }
    }

    deleteProduct = async (id) => {
        try {
            const product = await MongoConnection.db.collection("products").findOne({ 
                _id: new ObjectId(id)
            })
            if(!producto) {
                throw new Error("ID inválido")
            }
        
            const result = await MongoConnection.db.collection("products").deleteOne({
                _id: new ObjectId(id)
            })
            if(result.deletedCount === 0) {
                throw new Error("Producto no encontrado")
            } else {
                return "Producto eliminado correctamente"
            }
        } catch(error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`)
        }
    }
}

export default ProductsMongoModel