// add middlewares here related to actions

function actionsLogger(req, res, next) {
  // DO YOUR MAGIC
  const timestamp = new Date().toLocaleDateString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] ${method} to ${url}`);
  next();
}

module.exports = {
  actionsLogger,
};
