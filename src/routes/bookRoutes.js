const express= require('express');
const booksRouter=express.Router();
function router(nav){
    var books = [{
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
        booksRouter.get('/',function(req,res){
            res.render("books",{
            nav,
            title:'Library',
        books
            });
        });
        booksRouter.get('/:id',function(req,res){
        const id=req.params.id
            res.render('book',{
                nav,
                title:'Library',
        book:books[id]
            });
        });

        return booksRouter;
}


module.exports = router;