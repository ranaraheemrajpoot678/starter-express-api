const express = require("express");
const router = express.Router();
const { registerUser, Login } = require("../Controllers/Authcontrolles");
const {
  getImages,
  getImageById,
  getImageByCat,
  getHeroimg,
} = require("../Controllers/Imagecontroller");

// All Routes
router.post("/registeruser", registerUser);
router.post("/login", Login);
router.get("/imagesbycategory/:name/:page", getImages);
router.get("/getimg/:id", getImageById);
router.get("/getimgbycat/:category", getImageByCat);
router.get("/getheroimg", getHeroimg);

// Export Router
module.exports = router;
