import { Router } from "express";
import { userManager } from "../managers/user-manager.js";
import { userValidator } from "../middlewares/user-validator.js";
import { upload } from "../middlewares/multer.js";
const router = Router();

router.post("/", userValidator, (req, res) => {
  // console.log(req.body)
  const response = userManager.create(req.body);
  res.json(response);
});

// FRONT --> form --> {first_name...} --> POST /api/users --> userValidator
//                                                         |
//                                                       next()       |
//                                                       create      error

router.get("/", (req, res) => {
  // const response = userManager.getAll()
  // res.json(response)
  throw new Error("Error al obtener los usuarios");
});

router.post("/profile", upload.single("image"), (req, res) => {
  const response = userManager.create({ ...req.body, image: req.file.path });
  res.json(response);
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const response = userManager.getById(id); //{ message, name, stack }
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message }); //{ message, name, stack }
  }
});

// router.put('/:id', (req, res)=>{
//     try {
//         const { id } = req.params
//         const response = userManager.update(id, req.body)
//         res.json(response)
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// })

// router.delete('/:id', (req, res)=>{
// try {
//         const { id } = req.params
//         const response = userManager.delete(id)
//         res.json(response)
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// })

export default router;
