const Post = require('../../models/post');

/*
    Write Post
    POST /api/posts
    {title, body}
*/

exports.write = async (ctx) => {
    const { title, body, tags } = ctx.request.body;

    const post = new Post({
        title, body, tags
    });

    try {
        await post.save(); // register in database
        ctx.body = post; // return saved result
    } catch(e) {
        ctx.throw(e, 500);
    }
};


/*
    List of Post
    GET /api/posts
*/

exports.list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(e, 500);
    }
};


/*
    Read specific post
    GET /api/posts/:id
*/

exports.read = (ctx) => {
};

/*
    Remove specific post
    DELETE /api/posts/:id
*/

exports.remove = (ctx) => {
};

/*
    Update Post(specific field)
    PATCH /api/posts/:id
*/

exports.update = (ctx) => {
};