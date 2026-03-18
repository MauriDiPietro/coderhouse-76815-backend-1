import { ProductModel } from "../models/product-model.js";

class ProductRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    try {
      return await this.model.find();
    } catch (error) {
      throw new Error(error);
    }
  };
  getById = async (id) => {
    try {
      return await this.model.findById(id); //findOne({_id: id})
    } catch (error) {
      throw new Error(error);
    }
  };
  create = async (body) => {
    try {
      return await this.model.create(body); //insertOne
    } catch (error) {
      throw new Error(error);
    }
  };
  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, { new: true }); //updateOne $set
    } catch (error) {
      throw new Error(error);
    }
  };
  delete = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id); //deleteOne
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productRepository = new ProductRepository(ProductModel);