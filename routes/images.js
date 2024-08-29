const router = require("koa-router")();
const controller = require("../msvc/controller/images");

router.prefix("/images");

// router.get("/", controller.getUserCourses);
// router.post("/create", controller.createUserCourse);
router.post("/upload", controller.uploadUserImages);

module.exports = router;
