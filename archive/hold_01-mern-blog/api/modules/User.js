
// схема та модель користувача для Mongodb за допомогою Mongoose
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true, min:4, unique: true},
    password: {type: String, required: true},

})
const UserModel = model('User', UserSchema);
model.exports = UserModel;