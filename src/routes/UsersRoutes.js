import express from "express"
import UsersController from '../controllers/UsersController.js'

class UsersRoutes {
    constructor() {
        this.router = express.Router()
        this.usersController = new UsersController()
    }

    start() {
        this.router.get("/", this.usersController.getUsers)
        this.router.get("/:id", this.usersController.getUserById)
        this.router.post("/", this.usersController.postUser)
        this.router.patch("/:id", this.usersController.patchUser)
        this.router.put("/:id", this.usersController.updatedUser)
        this.router.delete("/:id", this.usersController.deleteUser)
        return this.router
    }
}
export default UsersRoutes
