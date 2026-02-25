import { Router } from "express";
const router = Router()

router.post('/:cid/product/:pid', (req, res)=>{
    const { cid } = req.params
    const { pid } = req.params
    //buscar cart por id    { id, products: [{product: 'asasdasd121', quantity: 1}] }
    //buscar prod por id
    //validar que el prod exista dentro del carrito
    //si existe, sumarle 1 a quantity
    //si no existe lo agrego con quanitty en 1
})

export default router;