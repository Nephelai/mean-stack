var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    }, {
    versionKey: false
});

mongoose.model('User', UserSchema);