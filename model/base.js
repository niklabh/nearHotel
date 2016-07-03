'use strict';

var util = require('util');
var debug = require('debug')('model:base');

var sortMap = {
  desc: 'descending',
  asc: 'ascending',
  descending: 'descending',
  ascending: 'ascending'
};

function Model(options, db) {
  this.name = options.name;
  this.columns = options.columns;
  this.schema = {
    'name': this.name,
    'columns': this.columns
  };
  this.table = db.define(this.schema);
}

Model.prototype = {
  list: function(options, cb) {
    debug('[Model:list] options:' + JSON.stringify(options));
    var selectFields, filters, orderFields, query;

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    selectFields = getselectFields(options, this);
    filters = prepareFilters(options, this);
    orderFields = getOrderFields(options, this);

    query = this.table.select(selectFields);

    if (filters.length) {
      query = query.where.apply(query, filters);
    }

    if (orderFields.length) {
      query = query.order.apply(query, orderFields);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }
    query.exec(cb);
  },

  insert: function(options, cb) {
    debug('[insert] options:' + JSON.stringify(options));
    this.table.insert(options).exec(cb);
  },

  update: function(data, keys, cb) {
    debug('[update] data:' + JSON.stringify(data));
    debug('[update] keys:' + JSON.stringify(keys));
    var table = this.table;
    var query = table.update(data);
    generateUpdateWhereClause(table, query, keys);
    query.exec(cb);
  },

  delete: function(id, cb) {
    debug('[delete] id:' + id);
    if (!parseInt(id)) return cb(new Error('Invalid ID'));
    this.table.delete().where(this.table.id.equals(id)).exec(cb);
  }

};

function prepareFilters(options, obj) {
  var filters, result = [];
  filters = options.filters || (typeof(options) === 'object' && options) || {};
  for (var f in filters) {
    if (obj.columns.indexOf(f) !== -1 && filters[f] !== undefined && typeof(filters[f]) !== 'object') {
      if (!util.isArray(filters[f]))
        result.push(obj.table[f].equals(filters[f]));
      else
        result.push(obj.table[f].in(filters[f]));
    }
  }
  return result;
}

function getselectFields(options, obj) {
  var fields;
  // Apply count clause on the column passed as value
  // example {count: 'state'}
  if (options.count) {
    fields = [obj.table[options.count].count()];
  }
  // Apply distinct clause on the column passed as value
  // example {distinc_column: 'state'}
  else if (options.distinct_column && obj.table[options.distinct_column]) {
    fields = [db.functions.DISTINCT(obj.table[options.distinct_column])];
  }
  // select all valid sub keys passed in columns key
  // example {columns: ['state','id','is_enabled']}
  // example {columns: 'state,id,is_enabled'}
  else if (options.columns) {
    if (!util.isArray(options.columns))
      options.columns = options.columns.split(',');
    fields = options.columns.map(function(x) {
      return obj.table[x];
    });
  }
  // select all columns
  else {
    fields = [obj.table.star()];
  }
  return fields;
}

function getOrderFields(options, obj) {
  var fields = [];
  if (options.order_by && (typeof(options.order_by) === 'object')) {
    for (var f in options.order_by) {
      if (obj.table[f])
        fields.push(obj.table[f][sortMap[options.order_by[f]]]);
    }
  }
  return fields;
}

function generateUpdateWhereClause (table, query, keys) {
  Object.keys(keys).forEach(function (x) {
    if (util.isArray(keys[x])) {
      query.where(table[x].in(keys[x]));
    } else {
      if (keys[x] || keys[x] === 0) {
        query.where(table[x].equals(keys[x]));
      }
    }
  });
}

module.exports = Model;