const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    account: {
        type: String
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'storeId'
    }
});

const User = model('User', UserSchema);

module.exports = User;