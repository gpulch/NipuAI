const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with users");
});

router.get("/:userId", function (req, res, next) {
  let userId = req.params.userId;
  res.send("you asked for this userId: " + userId);
});

router.post("/", function (req, res, next) {
  res.send("post request on user");
});

router.delete("/", function (req, res, next) {
  res.send("deleted user");
});

module.exports = router;
