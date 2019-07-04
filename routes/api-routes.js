const jwt = require("jsonwebtoken");
const userVerification = require("../controller/auth");
const config = require("../config/index");
const users = require("../model/users");
// const connection = require('../server');
let currentUser;

module.exports = function(app, connection) {
  app.post("/api/login", function(req, res) {
    const username = req.body.username;
    if ((req.body.username, req.body.password)) {
      const token = jwt.sign({ id: req.body.username }, req.body.password, {
        expiresIn: 86400,
        algorithm: "HS512" // expires in 24 hours
      });
      currentUser = req.body.username;

      console.log(`The token is ${token}`);
      const condition = username;
      const values = [username, token];
      const cols = ["username", "password"];
      const queryString = "SELECT * FROM ?? WHERE username = ?";
      connection.query(queryString, ["usernameLogin", condition], function(
        err,
        result
      ) {
        if (err) {
          throw err;
        }

        if (!result || result.length === 0) {
          connection.query(
            "INSERT INTO ?? (??) VALUES (?)",
            ["usernameLogin", cols, values],
            function(err, result) {
              if (err) {
                res.status(401).send("You are not authorized");
                throw err;
              } else {
                res
                  .cookie("token", token)
                  .json({ auth: true, redirect: "success" });
              }
            }
          );
        } else {
          const resPassword = result[0].password.match(/[^.]*/, "")[0];
          const resToken = token.match(/[^.]*/, "")[0];

          if (resToken === resPassword) {
            res
              .cookie("token", token)
              .json({ auth: true, redirect: "success" });
          } else {
            res.status(401).send("You are not authorized");
          }
        }
      });
    } else {
      res.status(401).send("You are not authorized");
    }
  });

  app.use(function(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err || decoded.id != currentUser) {
          res.status(403).json({
            auth: false,
            message: "Incorrect or missing token"
          });
        } else {
          next();
        }
      });
    } else {
      res.status(403).json({
        auth: false,
        message: "Incorrect or missing token"
      });
    }
  });

  app.get("/api/users", function(req, res) {
    res.json({ auth: true, data: users });
  });
};
