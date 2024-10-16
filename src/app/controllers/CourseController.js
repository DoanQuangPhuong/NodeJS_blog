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

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/2.png`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);  // Pass errors to the next middleware
    }
    

    edit(req,res,next)
    {
      Course.findOne({_id:req.params.id})
            .then(course => res.render('courses/edit', {
                course : mongooseToOject(course)
            }))
            .catch(next)
    }

    update(req,res,next)
    {
      Course.updateOne({_id:req.params.id},req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }

    delete(req,res,next)
    {
        //su dung plugin mongoose-delete
      Course.delete({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    restore(req,res,next)
    {
        Course.restore({_id:req.params.id})
        .then(() => res.redirect('/me/trash/courses'))
        .catch(next)
    }
}

module.exports = new CourseController();