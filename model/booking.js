'use strict';

var Model = require('./base');
var db = require('./db');

var schema = {
  'name': 'booking',
  'columns':[
    'id',
    'user_id',
    'hotel_id',
    'hotel_name',
    'hotel_desc',
    'hotel_address',
    'hotel_lat',
    'hotel_long',
    'hotel_image',
    'hotel_rating',
    'created_at',
    'check_in',
    'check_out',
    'first_name',
    'last_name',
    'email',
    'phone',
    'price',
    'info'
  ]
};

module.exports = new Model(schema, db);