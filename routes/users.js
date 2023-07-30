const express = require("express");
const users = require("./users.json");

const router = express.Router();

router.get("/getAllUsers", (_req, res) => {
    try {
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "error:" + error,
            data: null,
        });
    }
});

module.exports.router = router;