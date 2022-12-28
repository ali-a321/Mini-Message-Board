const express = require("express")
const router = express.Router()
const messages = require("../public/javascript/data")


router.get('/', function(req,res){
  res.render('index', {messages:messages} ) 
})

 router.post("/new", function (req, res) {
  messages.push({
    author: capital(req.body.author),
    message: req.body.message,
    time: new Date().toLocaleTimeString("en-US"),
    date: new Date().toLocaleDateString("en-US", options),
  });
  res.redirect('/')
});

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = router
