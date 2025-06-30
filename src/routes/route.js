import FacturasController from "../controllers/controller.js";
import express from "express"

class Router {
    constructor() {
        this.router = express.Router()
        this.facturasController = new FacturasController()
    }

    startRoutes() { 
        this.router.get("/facturas", this.facturasController.getFacturas)
        this.router.post("/insertarFactura", this.facturasController.postFacturas)

        return this.router
    }
}
export default Router