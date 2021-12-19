"use strict";

const axios = require("axios"),
  { API_URL } = process.env;

exports.list_offers = async (req, res) => {
  await axios
    .get(API_URL)
    .then((result) => {
      res.json(result.data.offers);
    })
    .catch((err) => {
      res.json(err);
    });
};
