const Author = require("./Author")

const diego = new Author("Diego")

const post = diego.createPost("React", "React é legal")

post.addComment("Real")
post.addComment("Verdade")

console.log(diego)
console.log(post)