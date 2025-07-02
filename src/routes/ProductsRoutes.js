import express from "express";
import ProductsController from '../controllers/ProductsController.js'

class ProductsRoutes {
    constructor() {
        this.router = express.Router()
        this.productsController = new ProductsController()
    }

    start() {
        this.router.get("/", this.productsController.getProducts)
        this.router.get("/:id", this.productsController.getProductById)
        this.router.post("/", this.productsController.postProduct)
        this.router.patch("/:id", this.productsController.patchProduct)
        this.router.put("/:id", this.productsController.updatedProduct)
        this.router.delete("/:id", this.productsController.deleteProduct)
        return this.router
    }
}

export default ProductsRoutes