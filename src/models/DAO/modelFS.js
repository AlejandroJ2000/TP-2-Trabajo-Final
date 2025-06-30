import fs from 'fs'
import path from 'path'

class FacturasModelFS {
    constructor() {
        this.filePath = path.resolve('facturas.json')
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath)
            this.facturas = JSON.parse(data)
        } else {
            this.facturas = []
            this.saveToFile()
        }
        this.nextId = this.facturas.length ? this.facturas[this.facturas.length - 1].id + 1 : 1
    }

    saveToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.facturas, null, 2))
    }

    getFacturas = async () => {
        return this.facturas
    }

    postFacturas = async (newFactura) => {
        const factura = {
            id: this.nextId++,
            ...newFactura
        }
        this.facturas.push(factura)
        this.saveToFile()
        return factura
    } 
}
export default FacturasModelFS