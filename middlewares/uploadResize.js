const jimp = require("jimp");

const uploadResize = async (image) => {
  jimp
    .read(image)
    .then((file) => {
      return file.resize(250, 250).write(image);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = uploadResize;
