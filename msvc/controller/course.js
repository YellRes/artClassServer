const { getCourses } = require("../service/course");

const getUserCourses = async (ctx, next) => {
  let data = await getCourses(ctx.request.query);
  return (ctx.response.body = {text: '获取成功', status: 0, data});
};

module.exports = {
    getUserCourses,
};
