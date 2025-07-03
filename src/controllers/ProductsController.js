import ProductsService from "../services/ProductsService.js";
import CurrencyExtraService from "../services/CurrencyExtraService.js";
import generator from "../extras/generator.js";

class ProductsController {
    constructor() {
        this.productsService = new ProductsService()
        this.currencyExtraService = new CurrencyExtraService()
        this.randomProduct = this.randomProduct.bind(this)
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

    getProductPriceInARS = async (req, res) => {
        try {
          const { id } = req.params;

          const productData = await this.productsService.getProductById(id);
          const product = productData.product;

          const exchangeRate = await this.currencyExtraService.getExchangeRate();
          const usdPrice = product.price;
          const priceInARS = parseFloat((usdPrice * exchangeRate.compra).toFixed(2));
    
          res.json({
            message: productData.message,
            product,
            exchangeRate,
            priceInARS
          });
    
        } catch (error) {
          res.status(500).json({ message: 'Error al obtener el precio en ARS.', error: error.message });
        }
      }

    randomProduct = async (req, res) => {
        try {
            const random = generator.randomProd()
            res.status(200).json(random)
        } catch(error) {
            res.status(500).json({ error: "Error al generar producto random." })
        }
    }  
}

export default ProductsController