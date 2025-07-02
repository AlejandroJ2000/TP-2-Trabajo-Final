import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class UsersMongoModel {
    constructor() {}

    getUsers = async () => {
        return await MongoConnection.db.collection("users").find({}).toArray()
    }

    getUserById = async (id) => {
        try {
            if(!ObjectId.isValid(id)) {
                throw new Error("ID inválido: no tiene la longitud correcta de 24 caracteres")
            } else {
                const user = await MongoConnection.db.collection("users").findOne({ _id: new ObjectId(id) })
                if(!user) {
                    throw new Error("Usuario no encontrado")
                } else{
                    return user
                }
            }    
        } catch(error) {
            throw new Error(`Error al actualizar el usuario por ID: ${error.message}`)
        }
    }

    postUser = async (data) => {
        const result = await MongoConnection.db.collection("users").insertOne(data)
        return { message: "Usuario agregado correctamente", result }
    }

    patchUser = async (id, data) => {
        try {
            if(!ObjectId.isValid(id)) {
                throw new Error("ID inválido")
            } else{
                const user = await MongoConnection.db.collection("users").updateOne(
                    { _id: new ObjectId(id) },
                    { $set: data }
                )
                if (user.modifiedCount === 0) {
                    throw new Error("No se actualizó nada")
                } else {
                    return { message: "usuario actualizado parcialmente", user }
                }
            }    
        } catch(error) {
            throw new Error(`Error al actualizar el usuario: ${error.message}`)
        }
    }

    updateUser = async (id, data) => {
        if(!ObjectId.isValid(id)) {
            throw new Error("ID inválido")
        } else{
            const user = await MongoConnection.db.collection("users").replaceOne(
                { _id: new ObjectId(id) },
                data
            )
            if (user.modifiedCount === 0) {
                throw new Error("No se reemplazó nada")
            } else {
                return { message: "usuario reemplazado completamente", user }
            }
        }
    }

    deleteUser = async (id) => {
        try {
            if(!ObjectId.isValid(id)) {
                throw new Error("ID inválido")
            } else {
                const user = await MongoConnection.db.collection("users").deleteOne({ _id: new ObjectId(id) })
                if (user.deletedCount === 0) {
                    throw new Error("Usuario no encontrado")
                } else {
                    return { message: "Usario eliminado correctamente", user }
                }
            }
        } catch(error) {
            throw new Error(`Error al intentar borrar el usuario: ${error.message}`)
        }    
    }
}

export default UsersMongoModel