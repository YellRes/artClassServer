const {getImages, uploadImages } = require("../service/images");

const getAllImages = async (ctx, next) => {
  const data = await getImages(ctx.request.body);
  console.log('data',data);
  ctx.response.body = {text: '获取成功', status: 0, data};
  next();
}

const uploadUserImages = async (ctx, next) => {
  console.log(ctx.request.body);
  const data = await uploadImages(ctx.request.body);
  ctx.response.body = {text:'上传成功', status: 0, data};
  next();
}

module.exports = {
    getAllImages,
    uploadUserImages
};
