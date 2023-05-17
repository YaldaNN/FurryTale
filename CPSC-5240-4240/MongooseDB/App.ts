import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AccountModel} from './model/AccountModel';
import {PostModel} from './model/PostModel';
import * as crypto from 'crypto';
import {CommentModel} from './model/CommentModel';
import {AchievementModel} from './model/AchievementModel';
import {VerificationBadgeModel} from './model/VerificationBadgeModel';
import { UserModel } from './model/UserModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Account:AccountModel;
  public Comment:CommentModel;
  public Achievement:AchievementModel;
  public VerificationBadge:VerificationBadgeModel;
  public Post:PostModel;
  public User:UserModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Account = new AccountModel();
    this.Comment = new CommentModel();
    this.Achievement = new AchievementModel();
    this.VerificationBadge = new VerificationBadgeModel();
    this.Post = new PostModel();
    this.User = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }


  // Configure API endpoints.
  // ACCOUNT
  private routes(): void {
    let router = express.Router();

    router.use((req, res, next) => {
      res.append('Access-Control-Allow-Origin', ['*']);
      res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.append('Access-Control-Allow-Headers', 'Content-Type');
      next();
  });

    router.get('/account/', (req, res) => {
      console.log("why?");
      this.Account.retrieveAllAccounts(res);
      
  });

    router.post('/account/', (req, res) => {
      const accountId = crypto.randomBytes(16).toString("hex");
      const userId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      var accountJsonObj = {
        
          "accountId" : accountId,
          "userId" : userId,
          "accountType" : jsonObj.accountType,
          "payment" : jsonObj.payment
      
      }

      var userJsonObj = {
        "userId" : userId,
        "userName" : jsonObj.userName,
        "userPassword" : jsonObj.userPassword,
        "accountId" : accountId,
        "tailers" : [],
        "tailee" : [],
        "about" : jsonObj.about,
        "achievement" : [],
        "posts" : [],
        "openToWork" : jsonObj.openToWork,
        "verified" : jsonObj.verified,
        "verificationBadgeId" : jsonObj.verificationBadgeId,
        "email" : jsonObj.email,
        "profilePic" : jsonObj.profilePic
    }
      this.Account.model.create([accountJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });

      this.User.model.create([userJsonObj], (err) => {
        if (err) {
          console.log('object creation failed');
      }
      })
      res.send(userJsonObj);
    });

    router.put('/updateAccountType', (req, res) => {
      var jsonObj = req.body;
      this.Account.updateAccountType(jsonObj, res);
    })


  
    //USER
    router.get('/users/', (req, res) => {
          console.log("Here are users");
          this.User.retrieveAllUsers(res);
      
        });
  
    router.put('/user/updateUser/', (req, res) =>{
      console.log("came to update user");
      var jsonObj = req.body;
      this.User.updateUser(jsonObj, res);

    });

    router.put('/user/addTailer', (req, res) => {
      const tailerId = req.body.tailerId;
      const taileeId = req.body.taileeId;
      this.User.addTailer(tailerId, taileeId, res);
    })

    router.get('/openToWork/', (req, res) => {
      console.log("Here are users");
      this.User.retrieveAllUsersOpenToWork(res);
  
    });

    router.get('/oneUser', (req, res) => {
      console.log("Here is your post");
      this.User.retireveOneUser(req.query.userId.toString(), res);
    
    });
    
    // COMMENT
    router.get('/comment/', (req, res) => {
      console.log("Your stupid comments!");
      this.Comment.retrieveAllComments(res);
      
    });

    router.post('/comment/', (req, res) => {
      const commentId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      jsonObj.commentId = commentId;
      this.Comment.model.create([jsonObj], (err) => {
         if (err) {
              console.log('object creation failed');
         }
      });
      res.send('{"Comment Id is":"' + commentId + '"}');
    });

    router.put('/updateComment', (req, res) => {
      var jsonObj = req.body;
      
      this.Comment.updateComment(jsonObj, res)
    });

    router.delete('/comment/delete', (req, res) => {
       this.Comment.deleteComment(req.query.commentId.toString(), res);
    });


    // ACHIEVEMENT
    router.get('/achievement/', (req, res) => {
      console.log("Better your achievment worth it!");
      this.Achievement.retrieveAllAchievement(res);
  
    });

    router.get('/oneUserAchievement', (req, res) => {
     console.log("Here is one user achievement");      
    var userId = req.query.userId.toString();      
     this.Achievement.retrieveAchievementByUserId(userId, res);      
    })

    

    router.post('/achievement/', (req, res) => {
      const achievementId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      jsonObj.achievementId = achievementId;
      this.Achievement.model.create([jsonObj], (err) => {
        if (err) {
          console.log('achievement creation failed');
        }
        else{
          var gettingUserQuery = this.User.model.findOne({userId : jsonObj.userId});
          gettingUserQuery.exec((err, item) => {
            console.log('achievement adding started');
            item.achievement.push(achievementId);
            console.log('achievement adding ended');
            console.log(item.achievement)
            var queryUpdateUser = this.User.model.findOneAndUpdate({userId : jsonObj.userId}, item, {
              new: true
            });

            console.log('Starting updating user');
            queryUpdateUser.exec((error, updatedUser) => {
              if(error)
               {console.log('User updating failed');}
               console.log(error)
              
              res.send("Added achievement")
            })
          });

          
        }
      });
      
      
    });

    //VERIFICATION BADGE
    router.get('/verificationBadge/', (req, res) => {
      console.log("Here is your verification badge docs!");
      this.VerificationBadge.retrieveAllVerificationBadge(res);
  
    });

    router.post('/verificationBadge/', (req, res) => {
      const verificationBadgeId = crypto.randomBytes(16).toString("hex");
      const userId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      jsonObj.verificationBadgeId = verificationBadgeId;
      jsonObj.userId = userId
      this.VerificationBadge.model.create([jsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      res.send('{"Verification Badge Id is":"' + verificationBadgeId + '"}');
    });

    //POST
    router.get('/posts/', (req, res) => {
      console.log("Here are your posts");
      this.Post.retrieveAllPosts(res);
  
    });

  router.get('/oneUsersPosts', (req, res) =>{
    console.log("Here is one user posts");    
  var userId = req.query.userId.toString();    
  this.Post.retrievePostsByUserId(userId, res);    
  })

  router.get('/onePost', (req, res) => {
    console.log("Here is your post");
    this.Post.retireveOnePost(req.query.postId.toString(), res);
  
  });

  router.post('/posts/', (req, res) => {
    const postId = crypto.randomBytes(16).toString("hex");
    var jsonObj = req.body;
    jsonObj.postId = postId;
    this.Post.model.create([jsonObj], (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });

    
    res.send('{"Post Id is":"' + postId + '"}');
  
  });

  router.put('/updatePost/', (req, res) => {
    console.log("Staterted Updating")
    var jsonObj = req.body;
    const postId = jsonObj.postId
    this.Post.updatePost(postId, jsonObj, res);
  
  });

  router.put('/updatePostPaw/', (req, res) => {
    console.log("Staterted Updating Post Paw")
    var jsonObj = req.body;
    const postId = jsonObj.postId
    const pawerUserId = jsonObj.pawerUserId
    this.Post.updatePostPaw(postId, pawerUserId, res);
  
  });




    this.expressApp.use('/', router);

    //this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/pages/Images'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};