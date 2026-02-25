import { Router } from "express"
const router = Router()

const products = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
]

router.get('/:id', (req, res)=>{
    //buscar el curso por id
    // console.log(req.params)  // { id:  }
    const { id } = req.params
    const product = products.find((product) => product.id === parseInt(id))
    if(!product) return res.status(404).json({ message: 'Product not found'})
    return res.json(product)
})

router.get('/', (req, res)=>{
    // console.log(req.query)
    const { price } = req.query
    if(price) {
        const productsFiltered = products.filter((product) => product.precio === parseInt(price))
        return res.json(productsFiltered)
    }
    return res.status(200).json(products)
})

export default router;