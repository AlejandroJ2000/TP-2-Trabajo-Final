import generator from "../extras/generator.js";
import { expect } from "chai";
import supertest from "supertest";

const urlBase = supertest("http://localhost:8000");

describe('Test de integración de Products', () => {
    const newProduct = generator.randomProd();

    it('Debería responder con status 200 y un array', async () => {
        const response = await urlBase.get("/products");
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
    });

    it('Debería devolver 400 si falta campo requerido (es el error que queremos)', async () => {
        const badProduct = {
          // name falta intencionalmente
          description: "Producto sin nombre",
          price: 999,
          stock: 10,
          category: "Test"
        };
    
        const response = await urlBase
          .post("/products")
          .send(badProduct);
    
        expect(response.status).to.equal(400); // Espera 400 Bad Request
        expect(response.body).to.have.property("error"); // Mensaje de error Joi
      });
});
