exports.getAllPosts = (req, res) => {
    return res.send("GET - See all posts")
}

exports.publishPost = (req, res) => {
    return res.send("POST - Publish new post")
}

exports.getPost = (req, res) => {
    return res.send(`GET - See this post: posts/${req.params.postId}`)
} 

exports.updatePost = (req, res) => {
    return res.send(`PATCH - Update this post: posts/${req.params.postId}`)
}

exports.deletePost = (req, res) => {
    return res.send(`DELETE - Delete this post: posts/${req.params.postId}`)
}