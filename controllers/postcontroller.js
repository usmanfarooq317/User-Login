const { model } = require("mongoose");
const postmodel = require("../models/post");


// Create Post
app.post("/posts", authenticateJWT, async (req, res) => {
    const post = {
        userId: ObjectId(req.user.userId),
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date()
    };

    try {
        const postsCollection = await config.getPostsCollection();
        await postsCollection.insertOne(post);
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Get Posts by User ID
app.get("/posts/user/:userId", async (req, res) => {
    try {
        const userId = ObjectId(req.params.userId);
        const postsCollection = await config.getPostsCollection();
        const posts = await postsCollection.find({ userId }).toArray();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Update Post
app.put("/posts/:id", authenticateJWT, async (req, res) => {
    const postId = ObjectId(req.params.id);
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        updatedAt: new Date()
    };

    try {
        const postsCollection = await config.getPostsCollection();
        const result = await postsCollection.updateOne(
            { _id: postId, userId: ObjectId(req.user.userId) },
            { $set: updatedPost }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).send('Post not found or you are not authorized to update this post');
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete Post
app.delete("/posts/:id", authenticateJWT, async (req, res) => {
    const postId = ObjectId(req.params.id);

    try {
        const postsCollection = await config.getPostsCollection();
        const result = await postsCollection.deleteOne({
            _id: postId,
            userId: ObjectId(req.user.userId)
        });

        if (result.deletedCount === 0) {
            return res.status(404).send('Post not found or you are not authorized to delete this post');
        }

        res.status(200).send('Post deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports - {
    createpost,
    updatedPost,
    deletePost,
    getPost
}