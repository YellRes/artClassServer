const router = require("koa-router")();
const controller = require("../msvc/controller/course");

router.prefix("/course");

router.get("/", controller.getUserCourses);
router.post("/create", controller.createUserCourse);
router.post("/update", controller.updateUserCourse);

module.exports = router;
