const User=require('../Model/user.model')
const Post=require('../Model/post.model')
// to retrieve the total number of users.
const getTotalNumberOfUser=async(req,res)=>{
    try {
        const num_of_users=await User.count()
        res.status(200).send({num_of_users,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve the top 5 most active users, based on the number of posts.
const getMostActiveUsers=async(req,res)=>{
    try {
        const most_active_users=await Post.aggregate([{$group:{_id:'$user_id',totalPost:{$sum:1}}},{$sort:{totalPost:-1}},{$limit:5}])
        res.status(200).send({most_active_users,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve the total number of posts.
const getTotalNumberOfPost=async(req,res)=>{
    try {
        const num_of_posts=await Post.count()
        res.status(200).send({num_of_posts,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve the top 5 most liked posts.
const getMostLikedPosts=async(req,res)=>{
    try {
        const most_active_posts=await Post.find({}).sort({likes:-1}).limit(5)
        res.status(200).send({most_active_posts,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}

module.exports={getTotalNumberOfUser,getMostActiveUsers,getTotalNumberOfPost,getMostLikedPosts}
