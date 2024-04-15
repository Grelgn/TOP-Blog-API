exports.getComments = (req, res) => {
    return res.send(`GET - View comments on post: ${req.params.postId}`)
}

exports.postComment = (req, res) => {
    return res.send(`GET - Post a comment on post: ${req.params.postId}`)
}

exports.getComment = (req, res) => {
    return res.send(`GET - View comment: ${req.params.commentId} on post: ${req.params.postId}`)
}

exports.deleteComment = (req, res) => {
    return res.send(`GET - Delete comment: ${req.params.commentId} on post: ${req.params.postId}`)
}