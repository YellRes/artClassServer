const Images = require("../model/images");

const uploadImages = async (params) => {
  console.log(params)
  const { name, username, data, desc } = params;
  const res = await Images.create({
    name,
    username,
    data,
    desc
  })
  console.log({res});
  return res;
}

const getImages = async (params) => {
  const {username, name} = params
  return await Images.findAll({where: {username, name}})
}

module.exports = {
  getImages,
  uploadImages
};
