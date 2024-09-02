const postmodel = require("../models/post");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    try {
        const usersCollection = await config.getUsersCollection();
        const existingUser = await usersCollection.findOne({ name: data.name });
        if (existingUser) {
            return res.status(409).send('User already exists. Please choose a different username.');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        await usersCollection.insertOne(data);
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Login user 
app.post("/login", async (req, res) => {
    try {
        const usersCollection = await config.getUsersCollection();
        const check = await usersCollection.findOne({ name: req.body.username });
        if (!check) {
            return res.status(401).send("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            return res.status(401).send("Wrong password");
        }

        // Generate JWT token
        const token = jwt.sign({ userId: check._id }, JWT_SECRET, { expiresIn: '1h' });

        // Return token as JSON
        res.json({ access_token: token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = {
    signin,
    signin
}