const express = require("express");
const Router = express.Router();
const fetch = require("node-fetch");
const config = require("../../config");
const url = `${config.url.restaurants}`;

Router
    .get("/", async (req,res,next) => {
        try {
            const response = await fetch(url);
            const restaurants = await response.json();
            res.render("restaurants", {restaurants});
        } catch (error) {
            return next(error);
        };
    });
//

module.exports = Router;