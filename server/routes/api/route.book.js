// routes/api/books.js

const express =require("express")
const router =express.Router();
const Book = require('../../model/Books');

// @route GET api/books/test
// @description tests books route
// @access Public

router.get('/',(req,res)=>{
    res.status(200).json({
        message:'this is servessr response'
    })
});
// @route GET api/books
// @description add/save book
// @access Public
router.get('/books',async(req,res)=>{
 await Book.find()
 .then(book => res.json(book))
 .catch(err =>res.status(404).json({message:'no book found'}));

});

router.get('/books/:id',async(req,res)=>{
    await Book.findById(req.params.id,req.body)
    .then(book => res.json(book))
    .catch(err =>res.status(404).json({message:'no book found'}));
   
   });


 // @route GET api/books/:id
// @description add/save book
// @access Public
router.put('/books/:id',async(req,res)=>{
    await Book.findByIdAndUpdate(req.params.id,req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>res.status(404).json({message:'Unable to update the Database'}));
   
   });
// @route GET api/books
// @description add/save book
// @access Public

router.post('/books', async(req,res)=>{
 await Book.create(req.body)
  .then(book =>res.json(book))
  .catch(err => res.status(400).json({message:'unable to add this  books'}))
});



router.delete('/books/:id',async(req,res)=>{
    await Book.findByIdAndDelete(req.params.id,req.body)
    .then(book => res.json({ msg: 'deleted successfully' }))
    .catch(err =>res.status(404).json({message:'Unable to delete the Data'}));
   
   });
// @route GET api/books
// @description add/save book
// @access Public
module.exports = router;