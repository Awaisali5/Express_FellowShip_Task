

let posts = [
    { id: 1, title: "post One" },
    { id: 2, title: "post two" },
    { id: 3, title: "post three" },
    { id: 4, title: "post four" },
  ];
  


// @desc Get all the Posts
// @route Get /api/posts 


export const getPosts= (req, res, next) => {
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
  };


  // @desc Get a Single Post

// @route Get /api/posts/:id
export const GetPost=(req, res, next) => {
    const id = parseInt(req.params.id);
  
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
     const error= new Error(`A post with the id of ${id} does not found`);
    error.status= 404;
     return next(error);
  
    }
  
    res.status(200).json(post);
  
    // res.status(200).json(posts.filter((post) => post.id === id ));
  };

  // @desc create a new Post

// @route Post /api/posts

export const CreatePost=(req, res, next) => {
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
    };
    if (!newPost.title) {
      const error= new Error(`Please Include an Title`);
    error.status= 400;
     return next(error);
    }
  
    posts.push(newPost);
  
    res.status(201).json(posts);
  };


    // @desc Update the Post

// @route Post /api/posts/:id
export const UpdatePost = (req,res, next) => {
    const id= parseInt(req.params.id);

    const post= posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({massage: `No Post with the ${id} is available! `})
    }

    post.title= req.body.title;
    res.status(200).json(posts);
};


    // @desc Delete the Post

// @route Post /api/posts/:id

export const DeletePost=(req,res, next) => {
    const id= parseInt(req.params.id);

    const post= posts.find((post) => post.id === id);

    if(!post){
      const error= new Error(`A post with the id of ${id} does not found`);
      error.status= 404;
       return next(error);
    }

    // filter return the new array 
   posts= posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};