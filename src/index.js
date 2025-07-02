import express from "express"
import dotenv from "dotenv"

import ProductsRoutes from "./routes/ProductsRoutes.js"
import UsersRoutes from "./routes/UsersRoutes.js"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/products", new ProductsRoutes().start())
app.use("/users", new UsersRoutes().start())

app.use("/api", new Router().startRoutes())

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Not found"
    })
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))