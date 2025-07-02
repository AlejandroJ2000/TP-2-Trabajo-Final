import ProductsService from "../services/ProductsService.js";

class ProductsController {
    constructor() {
        this.productsService = new ProductsService()
    }

    getProducts = async (req, res) => {
        try {
            const products = await this.productsService.getProducts()
            res.status(200).json(products)
        } catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    getProductById = async (req, res) => {
        try {
            const { id } = req.params
            const product = await this.productsService.getProductById(id)
            res.status(200).json(product)
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }

    postProduct = async (req, res) => {
        try {
            const data = req.body
            const newProduct = await this.productsService.postProduct(data)
            res.status(201).json(newProduct)
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }

    patchProduct = async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            const updatedProduct = await this.productsService.patchProduct(id, data)
            res.status(200).json(updatedProduct)
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }

    updatedProduct = async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            const updatedProduct = await this.productsService.updateProduct(id, data)
            res.status(200).json(updatedProduct)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }

    deleteProduct = async (req, res) => {
        try {
            const { id } = req.params
            const message = await this.productsService.deleteProduct(id)
            res.status(200).json({ message })
        } catch(error) {
            res.status(404).json({ error: error.message })
        }
    }
}

export default ProductsController