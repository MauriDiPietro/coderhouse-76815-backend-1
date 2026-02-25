export const userValidator = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password) {
    res.status(400).json({ message: "Faltan datos requeridos" });
  }
  next();
};
