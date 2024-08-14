const { getCourses, createCourse, updateCourse } = require("../service/course");

const getUserCourses = async (ctx, next) => {
  let data = await getCourses(ctx.request.query);
  ctx.response.body = {text: '获取成功', status: 0, data};
  next();
};

const createUserCourse = async (ctx, next) => {
  const data = await createCourse(ctx.request.body);
  console.log('data',data);
  ctx.response.body = {text: '创建成功', status: 0, data};
  next();
}

const updateUserCourse = async (ctx, next) => {
  const data = await updateCourse(ctx.request.body);
  ctx.response.body = {text:'更新成功', status: 0, data};
  next();
}

module.exports = {
    getUserCourses,
    createUserCourse,
    updateUserCourse
};
