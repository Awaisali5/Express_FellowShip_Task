import express from "express";
const routers = express.Router();
import { CreatePost, DeletePost, GetPost, getPosts, UpdatePost } from '../controllers/PostController.js'





//get all posts
routers.get("/",getPosts );

// get a single post
routers.get("/:id",GetPost);

// create new post

routers.post("/",CreatePost );

//Update Post
routers.put('/:id',UpdatePost)


// Delete Post 

routers.delete('/:id',DeletePost )



export default routers;
