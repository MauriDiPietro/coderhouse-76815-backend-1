import { PetModel } from "../models/pet-model.js";

class PetRepository {
    constructor(model) {
        this.model = model;
    }

    getById = async (id) => {
        try {
            return await this.model.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

}

export const petRepository = new PetRepository(PetModel);