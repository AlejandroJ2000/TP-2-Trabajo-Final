import Factory from "../models/Factory.js"

class ProductsService {
    constructor() {
        this.productsDAO = Factory.createProductDAO(process.env.PERSISTENCE)
    }

    getProducts = async () => {
        return await this.productsDAO.getProducts()
    }

    getProductById = async (id) => {
        return await this.productsDAO.getProductById(id)
    }

    postProduct = async (data) => {
        return await this.productsDAO.postProduct(data)
    }

    patchProduct = async (id, data) => {
        return await this.productsDAO.patchProduct(id, data)
    }

    updateProduct = async (id, data) => {
        return await this.productsDAO.updateProduct(id, data)
    }

    deleteProduct = async (id) =>{
        return await this.productsDAO.deleteProduct(id)
    }
}

export default ProductsService