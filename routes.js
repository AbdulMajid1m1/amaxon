var express = require("express");
const router = express.Router();

const getMemberByDate = require("./api");



router.get("/",getMemberByDate.getDataInPostman);

module.exports = router;
