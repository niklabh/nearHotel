"use strict";

var bookingApi = require("./api/booking");

module.exports = function(app) {
  app.post("/create_booking", bookingApi.create);
  
  app.get("/list_booking", bookingApi.list);
  
  app.get("/booking/:id", bookingApi.get);
};
