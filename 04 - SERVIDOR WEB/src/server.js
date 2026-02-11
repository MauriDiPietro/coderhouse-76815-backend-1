import express from "express";
import { userManager } from "./managers/user-manager.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api/products/:id', (req, res)=>{
    //buscar el curso por id
    // console.log(req.params)  // { id:  }
    const { id } = req.params
    const product = products.find((product) => product.id === parseInt(id))
    if(!product) return res.status(404).json({ message: 'Product not found'})
    return res.json(product)
})

app.get('/api/products', (req, res)=>{
    // console.log(req.query)
    const { price } = req.query
    if(price) {
        const productsFiltered = products.filter((product) => product.precio === parseInt(price))
        return res.json(productsFiltered)
    }
    return res.status(200).json(products)
})

/* ------------------------------------ - ----------------------------------- */

app.post('/api/users', (req, res)=>{
    // console.log(req.body)
    const response = userManager.create(req.body)
    res.json(response)
})

app.get('/api/users', (req, res)=>{
    const response = userManager.getAll()
    res.json(response)
})

app.get('/api/users/:id', (req, res)=>{
    try {
        const { id } = req.params
        const response = userManager.getById(id)    //{ message, name, stack }
        res.json(response)
    } catch (error) {
        res.status(404).json({ message: error.message })    //{ message, name, stack }
    }
})

// app.put('/api/users/:id', (req, res)=>{
//     try {
//         const { id } = req.params
//         const response = userManager.update(id, req.body)
//         res.json(response)
//     } catch (error) {
//         res.status(404).json({ message: error.message }) 
//     }
// })

// app.delete('/api/users/:id', (req, res)=>{
// try {
//         const { id } = req.params
//         const response = userManager.delete(id)
//         res.json(response)
//     } catch (error) {
//         res.status(404).json({ message: error.message }) 
//     }
// })

/* ------------------------------------ - ----------------------------------- */

app.post('/api/carts/:cid/product/:pid', (req, res)=>{
    const { cid } = req.params
    const { pid } = req.params
    //buscar cart por id    { id, products: [{product: 'asasdasd121', quantity: 1}] }
    //buscar prod por id
    //validar que el prod exista dentro del carrito
    //si existe, sumarle 1 a quantity
    //si no existe lo agrego con quanitty en 1
})

app.listen(8080, () => console.log("Server ok en puerto 8080"));
