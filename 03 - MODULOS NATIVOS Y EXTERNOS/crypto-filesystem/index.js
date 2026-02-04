const crypto = require("crypto");
const fs = require("fs");

class UserManager {
  constructor(path) {
    this.path = path;
  }

  getUsers() {
    if(fs.existsSync(this.path)){
      const usersFile = fs.readFileSync(this.path, 'utf-8');
      // "[{ "name": "Juan" }]" formato JSON
      return JSON.parse(usersFile) //formato javascript
    } return []
  }

  createUser(body) {
    const user = { ...body };
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    const users = this.getUsers();
    users.push(user);
    fs.writeFileSync(this.path, JSON.stringify(users))
    return user;
  }

  validateUser(username, password) {
    const users = this.getUsers();
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

const userManager = new UserManager('./users.json');

userManager.createUser({ username: "Cesar", password: "1234" });
userManager.createUser({ username: "Alfredo", password: "1234" });
// console.log(userManager.getUsers());
// console.log(userManager.validateUser("Juancito", "12345"));


