const express=require("express")
const postRouter=express.Router();

// Create a new post. The request should include the user_id.
postRouter.post('/',createPost)
// to retrieve a post by id.
postRouter.get('/:id',getPost)
// to update a post's content by id.
postRouter.put('/:id',updatePost)
// to delete a post by id.
postRouter.delete('/:id',deletePost)
// to increment the like count of a post by id.
postRouter.post('/:id/like',likePost)
// to decrement the like count of a post by id.
postRouter.post('/:id/unlike',unlikePost)

module.exports=postRouter