//importazione moduli
const posts = require("../controllers/posts.js");
const express = require("express");

//Creazione router Express
const router = express.Router();

//importazione e uso di multer per il salvattaggio dei file in locale
const multer = require("multer");
const uploader = multer({ dest: "public" });

//Definizione rotte post
router.get("/", posts.index);
router.post("/store", uploader.single("image"), posts.store);
router.get("/:slug", posts.show);
router.get("/:slug/download", posts.downloadImage);
router.delete("/:slug", posts.destroy);

module.exports = router;
