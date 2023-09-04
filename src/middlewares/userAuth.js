const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  let token = null;

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_WORD);
    const { id } = decodedToken;
    req.body.userId = id;
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Debe proveer un token o el mismo no es valido" });
  }

  next();
};
