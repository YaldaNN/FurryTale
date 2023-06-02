import googleOauth2 from './googleOauth2';

let passport = require('passport');
//let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    clientId: string;
    secretId: string;
     
    constructor() { 
        this.clientId = googleOauth2.id;
        this.secretId = googleOauth2.secret;

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "/auth/google/callback"
//                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("inside new password google strategy");
                process.nextTick( () => {
                    //console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("from passposrt userId:" + profile.id);
                    console.log("from passport displayName: " + profile.displayName);
                    console.log("retrieve all of the profile info needed");
                    // this.email = profile.emails[0].value;
                    return done(null, profile);
                }); 
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;