const Course = require('../models/Course')
const {mongooseToOject} = require('../util/mongoose')

class CourseController{
    show(req,res,next)
    {
        Course.findOne({slug : req.params.slug})
            .then((course) =>{
                res.render('courses/show',{course: mongooseToOject(course)})
            })
            .catch(next)
    }
    //[GET] /course/create
    create(req,res,next)
    {
       res.render('courses/create')
    }

    store(req,res,next)
    {
      res.json(req.body)
    }
}

module.exports = new CourseController();