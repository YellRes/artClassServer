const Course = require("../model/course");

const getCourses = async (params) => {
  const { limit, offset, project, username } = params || {};
  console.log(`username:${username}`)

  return await Course.findAll({
    where: {
      username
    }
  });
};

const createCourse = async (params) => {
  const {username, name, startTime, endTime, detail, desc, status} = params;
  return await Course.create({username, name, startTime, endTime, detail, desc, status});
}

const updateCourse = async (params) => {
  const {username, name, startTime, endTime, detail, consume, rest, desc, status} = params;
  const _course = await Course.findOne({where: {name,username}});
  _course.update({rest, consume, status});
}

module.exports = {
  getCourses,
  createCourse
};
