class FacturasModel {
    constructor() {
        this.facturas = []
        this.nextId = 1
    }

    getFacturas = async () => {
        return this.facturas
    }

    postFacturas = async (nuevaFactura) => {
        const factura = {
            id: this.nextId++,
            ...newFactura
        }
        this.facturas.push(factura)
        return factura
    }
}
export default FacturasModel