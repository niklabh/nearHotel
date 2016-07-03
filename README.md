
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Booking service Node.js project on Cloud9 IDE!

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, api is available on 'https://near-hotel-niklabh.c9users.io/'

API

      CREATE BOOKING

      POST https://near-hotel-niklabh.c9users.io/create_booking
      req:
      {
          "hotel_id":"akjsd321",
          "user_id":"23jqjw2j333",
          "hotel_name":"Grand Palace",
          "hotel_desc":"Awesome hotel",
          "hotel_image":"https://awesome.hotel",
          "hotel_rating":5,
          "check_in":1467533557368,
          "check_out":1467533557368,
          "first_name":"Nikhil",
          "last_name":"Ranjan",
          "email":"niklabh811@gmail.com",
          "phone":"8527445570",
          "price": 3456.34,
          "hotel_address":"1st street Bombay",
          "hotel_lat":12323.231,
          "hotel_long":4355.23
      }
      res:
      {
        "status": "OK",
        "message": "Hotel Booked Successfully!",
        "id": 3
      }
      error:
      {
        "status":"ERR",
        "message": "Error message"
      }
      
      
      
      LIST BOOKING FOR USER
      
      GET https://near-hotel-niklabh.c9users.io/list_booking?user_id=USER_ID
      res:
      [
        {
          "id": 2,
          "user_id": "23jqjw2j333",
          "hotel_id": "akjsd321",
          "hotel_name": "Grand Palace",
          "hotel_desc": "Awesome hotel",
          "hotel_address": "1st street Bombay",
          "hotel_lat": "12323.231",
          "hotel_long": "4355.23",
          "hotel_image": "https://awesome.hotel",
          "hotel_rating": 5,
          "updated_at": "2016-07-03T09:49:17.000Z",
          "created_at": "2016-07-03T09:49:17.000Z",
          "check_in": "2016-07-03T08:12:37.000Z",
          "check_out": "2016-07-03T08:12:37.000Z",
          "first_name": "Nikhil",
          "last_name": "Ranjan",
          "email": "niklabh811@gmail.com",
          "phone": "8527445570",
          "price": "3456.34",
          "info": null
        },
        {
          "id": 3,
          "user_id": "23jqjw2j333",
          "hotel_id": "akjsd321",
          "hotel_name": "Grand Palace",
          "hotel_desc": "Awesome hotel",
          "hotel_address": "1st street Bombay",
          "hotel_lat": "12323.231",
          "hotel_long": "4355.23",
          "hotel_image": "https://awesome.hotel",
          "hotel_rating": 5,
          "updated_at": "2016-07-03T09:56:50.000Z",
          "created_at": "2016-07-03T09:56:50.000Z",
          "check_in": "2016-07-03T08:12:37.000Z",
          "check_out": "2016-07-03T08:12:37.000Z",
          "first_name": "Nikhil",
          "last_name": "Ranjan",
          "email": "niklabh811@gmail.com",
          "phone": "8527445570",
          "price": "3456.34",
          "info": null
        }
      ]
      
      error:
      {
        status: "ERR",
        message: "Error Message"
      }
      
      
      
      GET BOOKING DETAIL
      GET https://near-hotel-niklabh.c9users.io/booking/BOOKING_ID?user_id=USER_ID
      res:
      {
        "id": 3,
        "user_id": "23jqjw2j333",
        "hotel_id": "akjsd321",
        "hotel_name": "Grand Palace",
        "hotel_desc": "Awesome hotel",
        "hotel_address": "1st street Bombay",
        "hotel_lat": "12323.231",
        "hotel_long": "4355.23",
        "hotel_image": "https://awesome.hotel",
        "hotel_rating": 5,
        "updated_at": "2016-07-03T09:56:50.000Z",
        "created_at": "2016-07-03T09:56:50.000Z",
        "check_in": "2016-07-03T08:12:37.000Z",
        "check_out": "2016-07-03T08:12:37.000Z",
        "first_name": "Nikhil",
        "last_name": "Ranjan",
        "email": "niklabh811@gmail.com",
        "phone": "8527445570",
        "price": "3456.34",
        "info": null
      }
      error:
      {
        "message": "Booking not found",
        "status": "ERR"
      }