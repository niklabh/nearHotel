"use strict";

var util = require('util');
var anydbsql = require('mysequel');
var config = require('../config').mysql;

function configure(config) {
  var dbConfig = { 
                  url: util.format('mysql://%s:%s@%s:3306/%s',
                                    encodeURIComponent(config.user),
                                    encodeURIComponent(config.password),
                                    config.host,
                                    config.database),
                  connections: { min: config.min, max: config.max },
                  queueLimit : 50000,
                  timeout: config.timeout
                };

  var db = anydbsql(dbConfig);
  return db;
}

module.exports = configure(config);