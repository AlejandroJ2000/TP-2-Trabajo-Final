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
}