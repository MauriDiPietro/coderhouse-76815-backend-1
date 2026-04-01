import { Router } from "express";
import { userController } from "../controllers/user-controller.js";

const router = Router();

router.get("/", userController.getAll);

router.get("/:id", userController.getById);

router.post("/", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

router.post("/:userId/pet/:petId", userController.addPetToUser);

export default router;


// DB ---> REPOSITORY ---> SERVICE ---> CONTROLLER ---> ROUTER