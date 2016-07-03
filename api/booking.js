'use strict';

var bookingModel = require('../model/booking');

module.exports = {
    create: function(req, res, next) {
        console.log(req.body);
        var booking = {};
        [
            'hotel_id',
            'user_id',
            'hotel_name',
            'hotel_desc',
            'hotel_address',
            'hotel_lat',
            'hotel_long',
            'hotel_image',
            'hotel_rating',
            'check_in',
            'check_out',
            'first_name',
            'last_name',
            'email',
            'phone',
            'price',
            'info'
        ].forEach(function(p){
            if(req.body[p]) booking[p] = req.body[p];
        });
        
        booking.check_in = new Date(booking.check_in);
        booking.check_out = new Date(booking.check_out);
        booking.created_at = new Date();
        
        console.log(booking);
        
        bookingModel.insert(booking, function(err, result){
            if (err) return next(err);
            res.json({
                status: "OK",
                message:"Hotel Booked Successfully!",
                id: result && result.insertId
            });
        });
    },
    list: function(req, res, next) {
        var options = {
            user_id: req.query.user_id
        };
        if (!req.query.user_id) return next(new Error("Please provide a valid user_id"));
        bookingModel.list(options, function(err, result){
            if (err) return next(err);      
            res.json(result || []);
        });
    },
    get: function(req, res, next) {
        if (!req.query.user_id) return next(new Error("Please provide a valid user_id"));
        if (!Number(req.params.id)) return next(new Error("Please provide a valid booking id"));
    
        var options = {
            id: req.params.id,
            user_id: req.query.user_id
        };
        bookingModel.list(options, function(err, result){
            if (err) return next(err);
            if (!result || !result.length) return next(new Error("Booking not found"));
            res.json(result[0]);
        });
    }
};