const crypto = require("crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  createUser(body) {
    const user = { ...body };
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    this.users.push(user);
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

const userManager = new UserManager();

userManager.createUser({ username: "Juancito", password: "1234" });
userManager.createUser({ username: "Pedrito", password: "1234" });
// console.log(userManager.getUsers());
console.log(userManager.validateUser("Juancito", "12345"));


