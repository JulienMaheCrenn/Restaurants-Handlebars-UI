const express = require("express");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {allowInsecurePrototypeAccess,} = require("@handlebars/allow-prototype-access");

Handlebars.registerPartial("head", "{{head}}");

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
});

module.exports = handlebars;
