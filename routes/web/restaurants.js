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
    })
    .post("/", async (req,res, next) => {
        try {
            await fetch(url, {
             method: "post",
             body: JSON.stringify(req.body),
             headers: { "Content-Type": "application/json"},   
            });
        
            res.redirect("/restaurants")
        } catch (error) {
            return next(error);
        }
    })
    .put("/:id", async (req,res, next) => {
        try {
            await fetch(`${url}/${req.params.id}`, {
                method: "put",
                body: JSON.stringify(req.body),
                headers: { "Content-Type": "application/json"},
            });
        } catch (error) {
            return next(error);
        }
    })
    .get("/new", async (req,res, next) => {
        try {
            res.render("newRestaurant");
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id", async (req,res,next) => {
        try {
            const response = await fetch(`${url}/${req.params.id}`);
            const restaurant = await response.json();
            res.render("restaurant", {restaurant});
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id/edit", async (req,res,next) => {
        try {
            const response = await fetch(`${url}/${req.params.id}`);
            const restaurant = await response.json();
            res.render("editRestaurant", {restaurant});
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id/menus", async (req,res,next) => {
        try {
            const response = await fetch(`${url}/${req.params.id}/menus`);
            const menus = await response.json();
            res.render("restaurantMenus", {menus});
        } catch (error) {
            return next (error)
        };
    })
    .post("/:id/menus", async (req,res,next) => {
        try {
            await fetch(`${url}/${req.params.id}/menus`, {
                method: "post",
                body: JSON.stringify(req.body),
                headers: { "Content-Type": "application/json"},   
               });
            
            res.redirect(`/restaurants/${req.params.id}/menus`)
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id/menus/new", async (req,res,next) => {
        try {
            const rest_id = req.params.id
            res.render("newMenu", {rest_id} )
        } catch (error) {
            return next(error);
        };
    })
    .get("/new", async (req,res, next) => {
        try {
            res.render("newRestaurant");
        } catch (error) {
            return next(error);
        };
    })

//


module.exports = Router;