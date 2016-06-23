'use strict';

module.exports = function(app){
  app.get('/topics', (req, res)=>{
    res.end("topics")
  })
}
