const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../util/mongoose')
class SiteController{

    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (error) {
    //         res.status(400).json({ error: 'ERROR' });
    //     }
    // }

    //viết theo cách promises
    index(req, res,next)
    {
        //chưa sửa dụng hàm
        // Course.find({})
        //     .then(courses => {
        //         courses = courses.map(course => course.toObject())
        //         res.render('home',{courses})
        //     })
        //     .catch(next)

        //sử dụng hàm
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next)
    }

    
    //get  /news/slag:

    search(req,res)
    {
        res.render('search');
    }
}

module.exports = new SiteController;