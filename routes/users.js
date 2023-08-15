const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).send("GET user list");
  console.log("HTTP Status:", res.statusCode);
});

router.get("/:userId", function (req, res, next) {
  const userId = req.params.userId;
  res.status(200).send("GET this userId: " + userId);
  console.log("HTTP Status:", res.statusCode);
});

router.post("/", function (req, res, next) {
  res.status(201).send("post request on user");
  console.log("HTTP Status:", res.statusCode);
});

router.delete("/:userId", function (req, res, next) {
  const userId = req.params.userId;
  res.status(204).send("deleted user" + userId);
  console.log("HTTP Status:", res.statusCode);
});

module.exports = router;
