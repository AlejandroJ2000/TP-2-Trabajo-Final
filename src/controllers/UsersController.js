import UsersService from "../services/UsersService.js"

class UsersController {
    constructor() {
        this.usersService = new UsersService()
    }

    getUsers = async (req, res) => {
        try {
            const users = await this.usersService.getUsers()
            res.status(200).json(users)
        } catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    getUserById = async (req, res) => {
        try {
            const { id } = req.params
            const users = await this.usersService.getUserById(id)
            res.status(200).json(users)
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }

    postUser = async (req, res) => {
        try {
            const data = req.body
            const newUser = await this.usersService.postUser(data)
            res.status(201).json(newUser)
        } catch(error) {
            res.status(400).json({ error: error.message })
        }
    }

    patchUser = async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            const updatedUser = await this.usersService.patchUser(id, data)
            res.status(200).json(updatedUser)
        } catch(error) {
            res.status(400).json({ error: error.message })
        }
    }

    updatedUser = async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            const updatedUser = await this.usersService.updateUser(id, data)
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params
            const message = await this.usersService.deleteUser(id)
            res.status(200).json({ message })
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }
}

export default UsersController