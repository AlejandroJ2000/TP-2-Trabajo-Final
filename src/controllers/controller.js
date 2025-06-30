import FacturasService from "../services/service.js";

class FacturasController {
    constructor() {
        this.facturasService = new FacturasService()
    }

    getFacturas = async(req, res) => {
        try {
            const facturas = await this.facturasService.getFacturas()
            res.status(200).json(facturas)
        } catch(error) {
            res.status(500).json({ error: " Error fetching facturas " })
        }
    }

    postFacturas = async(req, res) => {
        try {
            const newFactura = req.body
            if(!newFactura || !newFactura.numer || !newFactura.tipo || !newFactura.monto || !newFactura.estado) {
                return res.status(400).json({ error: "Factura or some mandatory fields are required" })
            }
            const createdFactura = await this.facturasService.postFacturas(newFactura)
            res.status(201).json(createdFactura)
        } catch(error) {
            res.status(500).json({ error: " Error creating factura " })
        }
    }
}
export default FacturasController