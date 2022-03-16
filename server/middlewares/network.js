const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

// const allowCrossDomain = (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
//   );

//   next();
// };

module.exports = (app) => {
  app.use(compression());

  // set security HTTP headers
  app.use(helmet());

  // app.use(allowCrossDomain);

  // parse json request body
  app.use(express.json());

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }));

  const whitelist = [/localhost/];
  const corsOptions = {
    credentials: true,
    origin: whitelist,
  };

  // enable cors
  app.use(cors(corsOptions));
};
