const express = require("express");
const {
  createTrainingRegistration,
  fetchTrainingRegistration,
  deleteTrainingRegistration,
} = require("../controller/trainingregistrationController.js");
//const auth = require("../middlewares/auth.js");

const router = express.Router();

router.post("/", createTrainingRegistration);
router.get("/",  fetchTrainingRegistration);
router.delete("/:id", deleteTrainingRegistration);
module.exports = router;
