const express= require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors = [{
        title :'I STEVE',
        author :'Steve Jobs',
        genre : 'Autobiography',
        img :'img1.png'
        },
        {
        title :'Author of What I Know for Sure',
        author :'Oprah Winfrey',
        genre : 'Fiction',
        img :'img2.jpeg'
        },
        {
        title :'Think Like Zuck',
        author :'Mark Zuckerberg',
        genre : 'Techie',
        img :'img3.jpg'
        }
        ]
        authorsRouter.get('/',function(req,res){
            res.render("authors",{
            nav,
            title:'Library',
        authors
            });
        });
        authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
            res.render('author',{
                nav,
                title:'Library',
        author:authors[id]
            });
        });

        return authorsRouter;
}


module.exports = router;