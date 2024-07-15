import express from "express";
const routers = express.Router();

let posts = [
  { id: 1, title: "post One" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
  { id: 4, title: "post four" },
];




//get all posts
routers.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  //    if else way
  // if(!isNaN(limit) && limit > 0){
  //     res.status(200).json(posts.slice(0,limit));

  // }
  // else{

  //     res.status(200).json(posts);
  // }

  // only if way

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts); 
});

// get a single post
routers.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
   const error= new Error(`A post with the id of ${id} does not found`);
  error.status= 404;
   return next(error);

  }

  res.status(200).json(post);

  // res.status(200).json(posts.filter((post) => post.id === id ));
});

// create new post

routers.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ massage: "please include the title" });
  }

  posts.push(newPost);

  res.status(201).json(posts);
});

//Update Post
routers.put('/:id', (req,res) => {
    const id= parseInt(req.params.id);

    const post= posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({massage: `No Post with the ${id} is available! `})
    }

    post.title= req.body.title;
    res.status(200).json(posts);
})


// Delete Post 

routers.delete('/:id', (req,res) => {
    const id= parseInt(req.params.id);

    const post= posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({massage: `No Post with the ${id} is available! `})
    }

    // filter return the new array 
   posts= posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
})



export default routers;
