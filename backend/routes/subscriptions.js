const express = require("express");
const router = express.Router();
const Subscriptions = require("../models/Subscriptions");
// const fetchUser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//Route 1 : Get All Notes using GET "/api/notes/fetchAllNotes" . Login required .
router.get("/getsubscriptions", async (req, res) => {
  try {
    // req.user is fetched from fetchUser middleware .
    const plans = await Subscriptions.find();
    res.json(plans);

  } catch (error) {
    console.error(error.message);
    res.status(400).send("Some Error Occured.");
  }
});



module.exports = router ;