const Sequelize = require("sequelize");
const { Op } = require("sequelize");
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

const getImageTest1 = async (params) => {
  const {username} = params
  return await Images.findOne({where: {username}})
}

const getImageList = async () => {
  // const {username} = params
  // Step 1: Find the maximum `updated_at` grouped by `username`
  const latestUpdates = await Images.findAll({
    attributes: [
      'username',
      [Sequelize.fn('MAX', Sequelize.col('updated_at')), 'latest_update'],
    ],
    group: ['username'],
  });

  console.log('latestUpdates', latestUpdates)
  // Extract the latest `updated_at` times
  const latestUpdateTimes = latestUpdates.map(item => item.get('latest_update'));

  // Step 2: Find all images where `updated_at` is in the list of latest updates
  const latestImages = await Images.findAll({
    where: {
      updated_at: {
        [Op.in]: latestUpdateTimes,
      },
    },
  });

    return latestImages;
}

module.exports = {
  getImages,
  uploadImages,
  getImageTest1,
  getImageList
};
