import { Router } from "express";
import { productRepository } from "../repositories/product-repository.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await productRepository.getAll();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productRepository.getById(id);
    if (!response) throw new Error("Producto no encontrado");
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await productRepository.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productRepository.update(id, req.body);
    if (!response) throw new Error("Producto no encontrado");
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productRepository.delete(id);
    if (!response) throw new Error("Producto no encontrado");
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;
