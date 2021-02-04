const router = require("express").Router();

// HTML Routes
 router.get('/', (req, res)=>{
    res.render("index");
})
    
module.exports = router;