const Comment = require("./Comment")

class Post {
    constructor(title, text, author) {
        this.title = title
        this.text = text
        this.author = author
        this.comments = []
    }

    addComment(comment) {
        return this.comments.push(new Comment(comment))
    }
}

module.exports = Post