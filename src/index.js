import express from "express"

// console.log("hola chupapis")
const app = express()

app.get("/", (_req, res) => {
  console.log("petición get desde la ruta /")
  return res.json({ message: process.env.MESSAGE })
})

app.listen(process.env.PORT, () => console.log(`servidor escuchando desde http://localhost:${process.env.PORT}`))