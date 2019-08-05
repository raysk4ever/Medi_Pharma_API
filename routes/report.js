const express = require("express");
const _ = require("lodash");

const router = express.Router();
const { Report, validate } = require("../modules/report");

router.use(cors());

router.get("/", async (req, res) => {
  let reports = await Report.find();
  res.send(reports);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.send(`error: ${error.details[0].message}`);

  let report = new Report(
    _.pick(req.body, [
      "name",
      "email",
      "phone",
      "address",
      "productName",
      "brand",
      "lot",
      "strength",
      "dose",
      "reactionType",
      "dateOccur",
      "otherInfo",
      "reactionInfo",
      "timeOccur",
      "batch"
    ])
  );

  const result = await report.save();

  res.json({ success: result });
});

module.exports = router;
