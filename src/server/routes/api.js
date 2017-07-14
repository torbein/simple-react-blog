const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Posts = mongoose.model('Posts');
const Projects = mongoose.model('Projects');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//api route to fetch all posts
router.get('/posts', (req,res) => {
  //find all posts
  console.log("Finding all posts");
  Posts.find( function(err, posts) {
    if(err){
      //error
      return res.send(500, err);
    }
    //success, return all posts
    return res.send(200, posts)
  });
})

//Post a post
router.post('/posts', (req,res) => {

  console.log("Attempting to create post! \n");
  console.log(req.body);

  var post = new Posts();
  post.title = req.body.title;
  post.body = req.body.title;
  post.author = "Victor";

  post.save(function(err, post) {

    if(err) {
      return res.send(500, err)
    }

    console.log("Succesfully saved post")
    res.json(200, post);
    });
});

//Get specific post
router.get('/posts/:id', (req,res) => {
  console.log(req.params.id)
  Posts.findOne({_id: req.params.id}, function(err, post) {
    console.log("Looking for post")
    if(err){
      //error
      return res.send(500, err);
    }
    //success, return post
    console.log("Found post: " + post);
    return res.send(200, post);
  });
});



//Update a post
router.put('/posts/:id', (req,res) => {
  console.log("Looking for post");
  console.log("req.body");
  Posts.findOne({_id: req.params.id}, function(err, post) {
    if(err) {
      return res.send(500, err);
    }

    console.log("Found post: " + post);
    console.log(req.params)
    post.title = req.params.title;
    post.body = req.params.body;
    post.modifed_at = Date.now();

    post.save(function(err, post) {
      if(err) 
        res.send(err);

      res.json(post);
    });
  });
});

//Delete a post
router.delete('/posts/:id', (req,res) => {
  console.log("Attempting to delete post");
  console.log(req.body);

  Posts.findOne({_id: req.params.id}, function(err, post) {
    if(err) {
      return res.send(500, err);
    }

    post.remove();
    console.log ("Found post, removing..");
    res.json(post);
  });
});

module.exports = router;