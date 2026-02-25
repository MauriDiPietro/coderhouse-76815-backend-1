export const logger = (req, res, next) => {
  console.log(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
  next();
};