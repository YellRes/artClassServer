const router = require("koa-router")();
const { login, register } = require("../msvc/controller/login");

router.get("/login", login);

module.exports = router;
