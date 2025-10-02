const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    createPost(title, text) {
        const post =  new Post(title, text, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author