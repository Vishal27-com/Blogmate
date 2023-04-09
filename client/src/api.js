import axios from 'axios'
const BASE_URL='http://localhost:8080'
export const createUserApi=(creds)=>{
    return axios.post(`${BASE_URL}/users/`,creds)
}
export const getUserApi=(id)=>{
    return axios.get(`${BASE_URL}/users/${id}`)
}
export const getAllUserApi=()=>{
    return axios.get(`${BASE_URL}/users/`)
}
export const updateUserApi=(id,creds)=>{
    return axios.put(`${BASE_URL}/users/${id}`,creds)
}
export const deleteUserApi=(id)=>{
    return axios.delete(`${BASE_URL}/users/${id}`)
}
export const getTotalNumberOfUsersApi=()=>{
    return axios.get(`${BASE_URL}/analytics/users`)
}
export const getTopMostUsers=()=>{
    return axios.get(`${BASE_URL}/analytics/users/top-active`)
}
export const createPostApi=(data)=>{
    return axios.post(`${BASE_URL}/posts`,data)
}
export const getPostApi=(id)=>{
    return axios.get(`${BASE_URL}/posts/${id}`)
}
export const getAllPostApi=()=>{
    return axios.get(`${BASE_URL}/posts/`)
}
export const updatePostApi=(id,data)=>{
    return axios.put(`${BASE_URL}/posts/${id}`,data)
}
export const deletePostApi=(id)=>{
    return axios.delete(`${BASE_URL}/posts/${id}`)
}
export const likePostApi=(id,likes)=>{
    return axios.post(`${BASE_URL}/posts/${id}/like`,{likes})
}
export const unlikePostApi=(id,likes)=>{
    return axios.post(`${BASE_URL}/posts/${id}/unlike`,{likes})
}
export const getTotalNumberOfPostsApi=()=>{
    return axios.get(`${BASE_URL}/analytics/posts`)
}
export const getTopMostLikedPostsApi=()=>{
    return axios.get(`${BASE_URL}/analytics/posts/top-liked`)
}



