const express = require("express");
const router = express.Router();

//get method / home
router.get("/api",(req, res) => {
    res.status(200).send({result:"Welcome Geckos Team 25, this the trello-geck-api"});
});


module.exports = router;