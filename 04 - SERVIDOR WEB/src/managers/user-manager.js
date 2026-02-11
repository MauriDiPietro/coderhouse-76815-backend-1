import crypto from "crypto";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

class UserManager {
  constructor(path) {
    this.path = path;
  }

  getAll() {
    if (fs.existsSync(this.path)) {
      const usersFile = fs.readFileSync(this.path, "utf-8");
      // "[{ "name": "Juan" }]" formato JSON
      return JSON.parse(usersFile); //formato javascript
    }
    return [];
  }

  getById(id){
    const users = this.getAll()
    const user = users.find(u => u.id === id)
    if(!user) throw new Error("User not found") //{ message, name, stack }
    return user
  }

  create(body) {
    const user = { id: uuidv4(), ...body };
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    const users = this.getAll();
    users.push(user);
    fs.writeFileSync(this.path, JSON.stringify(users));
    return user;
  }

  validateUser(username, password) {
    const users = this.getAll();
    const user = users.find((u) => u.username === username);
    if (!user) throw new Error("User not found");
    const newCrypto = crypto
      .createHmac("sha256", user.secret)
      .update(password)
      .digest("hex");
    if (user.password !== newCrypto) throw new Error("Invalid credentials");
    return "Login OK!!";
  }
}

export const userManager = new UserManager("./users.json");
