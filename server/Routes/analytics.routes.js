const express=require("express")
const analyticsRouter=express.Router();

// to retrieve the total number of users.
analyticsRouter.get('/users',getTotalNumberOfUser)
// to retrieve the top 5 most active users, based on the number of posts.
analyticsRouter.get('/users/top-active',getMostActiveUsers)
// to retrieve the total number of posts.
analyticsRouter.get('/posts',getTotalNumberOfPost)
// to retrieve the top 5 most liked posts.
analyticsRouter.get('/users/top-active',getMostLikedPosts)

module.exports=analyticsRouter