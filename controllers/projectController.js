const db = require('../models')

module.exports = {

    findProjects: function (req, res) {
        console.log("req", req.params.limit)
        db
            .Project
            .find({})
            .limit(parseInt(req.params.limit))
            .sort({_id: -1})
            .then(function(response){
                res.json(response)

            })
            .catch(function(err){
                res.json(err)
            })
    },

    addProjects: function (req, res) {
        db
            .Project
            .create({
                title: req.body.title, 
                text: req.body.text,
                imgsrc: req.body.imgsrc,
                link: req.body.link
            })
            .then(function(res){
                return console.log("res", res)
            })
            .catch(function(err){
                return console.log("err", err)
            })
        }
}