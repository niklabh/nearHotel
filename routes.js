module.exports = function(app) {
  app.get("/nik", function (req,res) {
      res.json({a:1});
  })  
};
