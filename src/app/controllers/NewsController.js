class NewsController{
    index(req,res)
    {
        res.render('news');
    }

    //get  /news/slag:

    show(req,res)
    {
        res.send('new detail');
    }
}

module.exports = new NewsController;