import Factory from "../models/Factory.js";
import { validateUser } from "./validate/schema.js";

class UsersService {
    constructor() {
        this.users = Factory.createUserDAO(process.env.PERSISTENCE)
    }

    getUsers = async () => {
        return await this.users.getUsers()
    }

    getUserById = async (id) => {
        return await this.users.getUserById(id)
    }

    postUser = async (data) => {
        const error = validateUser(data)
        if(error) {
            throw new Error(`Error de tipo validación: ${error}`)
        }
        return await this.users.postUser(data)
    }

    patchUser = async(id, data) => {
        return await this.users.patchUser(id, data)
    }

    updateUser = async (id, data) => {
        return await this.users.updateUser(id, data)
    }

    deleteUser = async (id) => {
        return await this.users.deleteUser(id)
    }
}

export default UsersService