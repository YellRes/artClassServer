const router = require("koa-router")();
const controller = require("../msvc/controller/user");

router.prefix("/users");

router.get("/", controller.getAllUser);

module.exports = router;
