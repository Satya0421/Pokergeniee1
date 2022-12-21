
const express =require("express");
const router  = express.Router();
const iframelinks =require('../controller/iframelinksController');


router.post("/",iframelinks.createIframelinks);
router.get("/:category",iframelinks.fetchIframelinks);
router.delete("/:id",iframelinks.deleteIframelinks);
router.post("/delete",iframelinks.deleteExtraIframelinks);

module.exports = router;