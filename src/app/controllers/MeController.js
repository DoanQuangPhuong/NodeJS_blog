const Course = require('../models/Course');
const {mongooseToOject} = require('../util/mongoose');
const {multipleMongooseToObject} = require('../util/mongoose')

class MeController{
    StoreCourses(req,res,next)
    {
        Course.find({})
            .then(courses => res.render('me/store_courses',{
                courses : multipleMongooseToObject(courses)
            }))
            .catch(next)
    }

    trashCourses(req,res,next)
    {
        Course.findDeleted({})
            .then(courses => res.render('me/trash_courses',{
                courses : multipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController();