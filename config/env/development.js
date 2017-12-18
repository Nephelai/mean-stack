module.exports = {
    // development composition option
    db: 'mongodb://localhost/mean-book',
    // general mongoDB URI - mongodb://username:password@hostname:port/database
    sessionSecret: 'cheshireSessionSecret',
    facebook: {
        clientID: '144013946203800',
        clientSecret: '7163da4b99e60f081d401246c06b1a0c',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    google: {
        clientID: '205310833239-o8k7gms0nuu16s5vg4thvng19ii34nmu.apps.googleusercontent.com',
        clientSecret: 'luC_plW1VkDviCDS-NHOAf59',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};