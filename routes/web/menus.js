const express = require("express");
const Router = express.Router();
const fetch = require("node-fetch");
const config = require("../../config");
const url = `${config.url.menus}`;

Router
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
    .get("/:id/edit", async (req,res,next) => {
        try {
            const response = await fetch(`${url}/${req.params.id}`);
            const menu = await response.json();
            res.render("editMenu", {menu});
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id/menuitems", async (req,res,next) => {
        try {
            const response = await fetch(`${url}/${req.params.id}/menuitems`);
            const menuitems = await response.json();
            res.render("menuMenuItems", {menuitems});
        } catch (error) {
            return next (error)
        };
    })
    .post("/:id/menuitems", async (req,res,next) => {
        try {
            await fetch(`${url}/${req.params.id}/menuitems`, {
                method: "post",
                body: JSON.stringify(req.body),
                headers: { "Content-Type": "application/json"},   
               });
            
            res.redirect(`/menus/${req.params.id}/menuitems`)
        } catch (error) {
            return next(error);
        };
    })
    .get("/:id/menuitems/new", async (req,res,next) => {
        try {
            const menu_id = req.params.id
            res.render("newMenuItem", {menu_id} )
        } catch (error) {
            return next(error);
        };
    })
//

module.exports = Router;