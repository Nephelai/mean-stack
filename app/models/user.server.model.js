var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true
    },
    username: {
        type: String,
        trim: true,
        unique: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        set: function (url) {
            if(!url) {
                return url;
            } else {
                if(url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }

                return url;
            }
        }
    }
});

UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    var spiltName = fullName.spilt(' ');
    this.firstName = spiltName[0] || '';
    this.lastName = spiltName[1] || '';
});

mongoose.model('User', UserSchema);