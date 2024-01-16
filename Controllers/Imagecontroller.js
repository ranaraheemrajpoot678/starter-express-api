// Import All Schemas
const { imagesSchema } = require("../Models/Imagesschema");

// get Images By Category Name and Limat
const getImages = async (req, res) => {
  const { name } = req.params;
  const { page } = req.params;
  try {
    if (name === "home") {
      const home = await imagesSchema
        .find()
        .sort({ likes: -1 })
        .skip((page - 1) * 10)
        .limit(10);
      return res.status(200).json(home);
    }
    const images = await imagesSchema
      .find({ category: name })
      .sort({ likes: -1 })
      .skip((page - 1) * 10)
      .limit(10);
    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get Image By Id
const getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const img = await imagesSchema.findOne({ _id: id });
    return res.status(200).json({ img: img });
  } catch (error) {
    console.log(error);
  }
};
const getImageByCat = async (req, res) => {
  const { category } = req.params;
  try {
    const imgs = await imagesSchema.find({ category: category });
    const img = imgs[Math.floor(Math.random() * imgs.length) + 1];
    return res.status(200).json({ img: img });
  } catch (error) {
    console.error(error);
  }
};
const getHeroimg = async (req, res) => {
  try {
    const imgs = await imagesSchema.find();
    const img1 = imgs[Math.floor(Math.random() * imgs.length) + 1];
    const img2 = imgs[Math.floor(Math.random() * imgs.length) + 1];

    return res.status(200).json({ img1, img2 });
  } catch (error) {
    console.error(error);
  }
};
//  Export routes
module.exports = { getImages, getImageById, getImageByCat, getHeroimg };
