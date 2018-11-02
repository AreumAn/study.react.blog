let postId = 1;

const posts = [
    {
        id: 1,
        title: 'This is title',
     body: 'This is body'
    }
];


/*
    Write Post
    POST /api/posts
    {title, body}
*/

exports.write = (ctx) => {
    const {
        title,
        body
    } = ctx.request.body;

    postId += 1;

    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};


/*
    List of Post
    GET /api/posts
*/

exports.list = (ctx) => {
    ctx.body = posts;
};


/*
    Read specific post
    GET /api/posts/:id
*/

exports.read = (ctx) => {
    const { id } = ctx.params;

    const post = posts.find(p => p.id.toString() === id);

    if(!post) {
        ctx.status = 404;
        ctx.body = {
            message: 'No Post!'
        };
        return;
    }
    ctx.body = post;
};

/*
    Remove specific post
    DELETE /api/posts/:id
*/

exports.remove = (ctx) => {
    const { id } = ctx.params;

    const index = posts.findIndex(p => p.id.toString() === id);

    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No Post!!'
        };
        return;
    }

    posts.splice(index, 1);
    ctx.status = 204;
};

/*
    Replace Post
    PUT /api/posts/:id
    { title, body }
*/
exports.replace = (ctx) => {
    const { id } = ctx.params;

    const index = posts.findIndex(p => p.id.toString() === id);

    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No Post!'
        };
        return;
    }

    posts[index] = {
        id,
        ...ctx.request.body
    };
    ctx.body = posts[index];
};

/*
    Update Post(specific field)
    PATCH /api/posts/:id
*/

exports.update = (ctx) => {
    const { id } = ctx.params;

    const index = posts.findIndex(p => p.id.toString() === id);

    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'No Post!'
        };
        return;
    }

    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    };

    ctx.body = posts[index];
};