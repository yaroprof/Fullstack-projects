const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./modules/User');
const app = express();

app.use(cors());
app.use(express.json())

await mongoose.connect('mongodb+srv://yaroslavsprof:<db_H6Q0KslaD6TLVjLD>@cluster0.hd0wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
})

app.listen(4000)
// res.json({ requestData: { username, password } });

// connect to cluster on mongodb: 
// mongodb+srv://yaroslavsprof:<db_H6Q0KslaD6TLVjLD>@cluster0.hd0wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// pw on db - Mongodb: H6Q0KslaD6TLVjLD