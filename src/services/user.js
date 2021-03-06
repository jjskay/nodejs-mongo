var _ = require('lodash');
var fs = require('fs');
import {UserMeta} from '../models';
import request from 'superagent';
import MongoClient from 'mongodb';
import serverConfig from '../configs/server';


var UserService = {
    name: 'user',
    read: function (req, resource, params, config, callback) {
       var url = serverConfig.mongo.cash.url;
       MongoClient.connect(url, function(err, db){
           var collection = db.collection('collection_user');
           collection.find().toArray((err, res) => {
              if(err){
                db.close();
                callback(err, null)
                return;
              }
              db.close();
              callback(err, res);
           })
       })

    },
    update: function(req, resource, params, body, config, callback){
       console.log(params,body)
       var url = serverConfig.mongo.cash.url;
       MongoClient.connect(url, function(err, db){
           var collection = db.collection('collection_user');
           collection.insertMany([{'username':body.username}],function(err, res){
               if(err){
                  db.close();
                  callback(err,null);
                  return;
               }
               db.close();
               callback(err, res);
           })
       })
    }

}


module.exports = UserService;