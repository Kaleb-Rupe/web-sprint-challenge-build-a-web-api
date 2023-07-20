const Projects = require("./projects-model");

// add middlewares here related to projects

function projectsLogger(req, res, next) {
  // DO YOUR MAGIC
  const timestamp = new Date().toLocaleDateString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] ${method} to ${url}`);
  next();
}

module.exports = {
  projectsLogger,
};
