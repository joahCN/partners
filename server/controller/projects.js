var express = require('express');
var router = express.Router();

var Project = require("../models/Project");
var Profile = require("../models/Profile");

var datas = require("../config").datas;

router.get('/saveProjects', (req, res)=>{
    var profile = new Profile.model({
        image: "http://placehold.it/80x80",
        name: "joah",
        desc: "I'm a export of software"
    });
    profile.save((error)=>{
        if(error) {
            res.json({status: 'error'});
        }
        new Project.model({
            title: "Change the world",
            desc: "This project will change the world",
            host: profile._id
        }).save((error)=>{
                if(error) {
                    res.json({status: 'error'});
                } else {
                    res.json({status: 'success'});
                }
            });
    });
});

router.get('/latestProjects', (req, res) =>{
    Project.model.find().populate("host").exec().then((projects)=>{
        res.json(projects);
    }, (error)=>{
        res.json(error);
    });

    //res.json({projects:datas.projects});
});

module.exports = router;