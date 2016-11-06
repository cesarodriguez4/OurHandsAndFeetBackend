'use strict';
var User = require('../model/user/user-schema.js');
var config = require('../config');
var request = require('request');
var jwt = require('jwt-simple');
var authUtils = require('./authUtils');



exports.authenticate = function (req, res) {
  var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
  //console.log(req.body);
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: "QsU6T71_8u8RSX6B25uYCunO",
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
    //console.log("After initial access");
    //console.log(token);
    var accessToken = token.access_token;
    //console.log(accessToken);
    var headers = { Authorization: 'Bearer ' + accessToken };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
      //console.log("Got Profile Info");
      console.log(profile);
      // // Step 3a. Link user accounts.
      // if (req.headers.authorization) {
      //   User.findOne({ google: profile.sub }, function(err, existingUser) {
      //     if (existingUser) {
      //       return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
      //     }
      //     var token = req.headers.authorization.split(' ')[1];
      //     var payload = jwt.decode(token, config.TOKEN_SECRET);
      //     User.findById(payload.sub, function(err, user) {
      //       if (!user) {
      //         return res.status(400).send({ message: 'User not found' });
      //       }
      //       user.google = profile.sub;
      //       user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
      //       user.displayName = user.displayName || profile.name;
      //       user.save(function() {
      //         var token = authUtils.createJWT(user);
      //         console.log("token sent");
      //         res.send({ token: token });
      //       });
      //     });
      //   });
      //} else {
        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ email: profile.email }, function(err, existingUser) {
          //console.log(existingUser);
          if (existingUser) {
              console.log("user exist");

            return res.send({ token: authUtils.createJWT(existingUser) });
          }else{
            var user = new User();
            user.name = profile.name;
            user.email = profile.email;
            user.save(function(err) {
              var token = authUtils.createJWT(user);
               console.log("token sent");

             res.send({ token: token });
            });
          }
          //     console.log("token sent");
          //
          //   res.send({ token: token });
          });
        });
      //}
    });
  //});
}
