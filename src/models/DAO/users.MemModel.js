class UsersMemModel {
    constructor() {
        this.users = [
            {
                _id: "1",
                firstName: "Pepe",
                lastName: "Argento",
                email: "pepe.argento@casados_conhijos.com.ar",
                password: "encrypted_password",
                address: {
                    street: "Aldolfo Alsina 2256",
                    city: "Capital Federal",
                    postalCode: "1407",
                    country: "Argentina"
                },
                purchaseHistory: [],
                cart: [],
                premiumSuscribed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                role: "customer",
                verificationStatus: true
            },
            {
                _id: "2",
                firstName: "Joel",
                lastName: "Miller",
                email: "joe.miller@last_of_us.com",
                password: "encrypted_password",
                address: {
                    street: "589 Auckley",
                    city: "Austin",
                    postalCode: "5290",
                    country: "USA"
                },
                purchaseHistory: [],
                cart: [],
                premiumSuscribed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                role: "customer",
                verificationStatus: true
            },
            {
                _id: "3",
                firstName: "Charles Foster",
                lastName: "Kane",
                email: "candidate_president@citizen_kane.com",
                password: "encrypted_password",
                address: {
                    street: "Zanadú 0001",
                    city: "New York",
                    postalCode: "0001",
                    country: "USA"
                },
                purchaseHistory: [],
                cart: [],
                premiumSuscribed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
                role: "customer",
                verificationStatus: true
            }
        ]
    }

    getUsers = async () => {
        return this.users
    }

    getUserById = async (id) => {
        const user = this.users.find(u => u._id === id)
        if(!user) {
            throw new Error("Usuario no encontrado")
        } else{
            return user
        }
    }

    postUser = async(data) => {
        const newUser = {
            _id: (this.users.length + 1).toString(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.users.push(newUser)
        return newUser
    }

    patchUser = async (id, data) => {
        try {
            const index = this.users.findIndex(u => u._id === id)
            if(index === -1) {
                throw new Error("Usuario no encontrado")
            } else {
                this.users[index] = {
                    ...this.users[index],
                    ...data,
                    updatedAt: new Date()
                }
                return this.users[index]
            }
        } catch(error) {
            console.error("La actualización parcial de usuarios tuvo un problema y no se pudo completar")
        }    
    }

    updateUser = async (id, data) => {
        try {
            const index = this.users.findIndex(u => u._id === id)
            if(index === -1) {
                throw new Error("Usuario no encontrado")
            } else {
                this.users[index] = {
                    ...data,
                     _id: this.users[index]._id,
                    updatedAt: new Date()
                }
                return this.users[index]
            }
        } catch(error) {
            console.error("La actualización total de usuarios tuvo un problema y no se pudo completar")
        }    
    }

    deleteUser = async (id) => {
        const index = this.users.findIndex(u => u._id === id)
        if(index === -1) {
            throw new Error("Usuario no encontrado")
        } else {
            this.users.splice(index, 1)
            return "Usuario eliminado correctamente"
        }    
    }
}

export default UsersMemModel