require("./config/env");

const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const koaJwt = require("koa-jwt");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

/**
 * 路由
 * */
const index = require("./routes/index");
const users = require("./routes/users");
const login = require("./routes/login");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(
  koaJwt({
    secret: process.env.JWT_SECRET,
  }).unless({
    path: [/login/],
  })
);
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(login.routes(), login.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
