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

module.exports = {
  getCourses,
};
