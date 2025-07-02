class ProductsMemModel {
    constructor() {
        this.products = [
            {
                _id: "1",
                name: "Festín de Cuervos",
                description: "Cuatra entrega de la Saga de Libros 'Canción de Hielo y Fuego'",
                stock: 10,
                price: 15000,
                category: "Libros",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                _id: "2",
                name: "Auriculares Inalambricos HP",
                description: "Dispositivos electornicos auditivos de la marca 'HP'",
                stock: 12,
                price: 31000,
                category: "Electronica",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                _id: "3",
                name: "Poster de 'El Increíble Castillo Vagabundo'",
                description: "Poster decorativo a color de la película 'El Increíble Castillo Vagabundo'",
                stock: 3,
                price: 20000,
                category: "Decoración",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]
    }

    getProducts = async () => {
        return this.products
    }

    getProductById = async (id) => {
        const product = this.products.find(p => p._id === id)
        if(!product) {
            throw new Error("Producto no encontrado")
        } else{
            return product
        }
    }

    postProduct = async (data) => {
        data.id = this.prod[this.prod.length - 1]._id + 1
        this.prod.push(data)
        return data
    }

    patchProduct = async (id, data) => {
        try {
            const index = this.products.findIndex(p => p._id === id)
            if (index === -1) {
                throw new Error("Producto no encontrado")
            } else{
                this.products[index] = {
                    ...this.products[index],
                    ...data,
                    updatedAt: new Date()
                }
            }    
            return this.products[index]
        } catch(error) {
            console.error("La actualización parcial del producto especificado no se pudo realizar")
        }    
    }

    updateProduct = async (id, data) => {
        try {
            const index = this.products.findIndex(p => p._id === id)
            if (index === -1) {
                throw new Error("Producto no encontrado")
            } else{
                this.products[index] = {
                    ...this.products[index],
                    ...data,
                    updatedAt: new Date()
                }
            }    
            return this.products[index]
        } catch(error) {
            console.error("La actualización definitiva del producto especificado no se pudo realizar")
        }    
    }

    deleteProduct = async (id) => {
        const index = this.products.findIndex(p => p._id === id)
        if (index === -1){
            throw new Error("Producto no encontrado")
        } else {
            this.products.splice(index, 1)
            return "Producto eliminado correctamente"
        }
    }
}

export default ProductsMemModel