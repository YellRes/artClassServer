const router = require("koa-router")();
const { login, register } = require("../msvc/controller/login");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
