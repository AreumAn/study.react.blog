const { ObjectId } = require('mongoose').Types;
const Joi = require('joi');

const Post = require('../../models/post');


exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if (!ObjectId.isValid(id)) {
      ctx.status = 400;
      return null;
    }

    return next();
  };

/*
    Write Post
    POST /api/posts
    {title, body}
*/

exports.write = async (ctx) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

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
    const page = parseInt(ctx.query.page || 1, 10);

    if(page < 1) {
        ctx.status = 400;
        return;
    }

    try {
        const posts = await Post.find()
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .exec();
        const postCount = await Post.count().exec();

        const limitBodyLength = post => ({
            ...post.toJSON(),
            body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
        });

        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts;
    } catch (e) {
        ctx.throw(e, 500);
    }
};


/*
    Read specific post
    GET /api/posts/:id
*/

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500);
    }
};

/*
    Remove specific post
    DELETE /api/posts/:id
*/

exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(e, 500);
    }
};

/*
    Update Post(specific field)
    PATCH /api/posts/:id
*/

exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500);
    }
};