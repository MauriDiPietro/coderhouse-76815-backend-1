import { userRepository } from "../repositories/user-repository.js";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  addPetToUser = async (userId, petId) => {
    try {
      return await this.repository.addPetToUser(userId, petId);
    } catch (error) {
      throw new Error(error);
    }
  }

  getAll = async (page, limit) => {
    try {
      return await this.repository.getAll(page, limit);
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const response = await this.repository.getById(id);
      if (!response) throw new Error("Usuario no encontrado");
      return response;
    } catch (error) {
      throw error;
    }
  };

  create = async (body) => {
    try {
      const response = await this.repository.create(body);
      if (!response) throw new Error("Error al crear el usuario");
      return response;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const response = await this.repository.update(id, body);
      if (!response) throw new Error("Usuario no encontrado");
      return response;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const response = await this.repository.delete(id);
      if (!response) throw new Error("Usuario no encontrado");
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export const userService = new UserService(userRepository);
