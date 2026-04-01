import { userService } from "../services/user-service.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      const response = await this.service.getAll(page, limit);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const response = await this.service.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.service.update(id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.service.delete(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  addPetToUser = async (req, res, next) => {
    try {
      const { userId, petId } = req.params;
      const response = await this.service.addPetToUser(userId, petId);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController(userService);
