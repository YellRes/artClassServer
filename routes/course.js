const router = require("koa-router")();
const controller = require("../msvc/controller/course");

router.prefix("/course");

router.get("/", controller.getUserCourses);

module.exports = router;
