import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AccountModel} from './model/AccountModel';
import * as crypto from 'crypto';
import {CommentModel} from './model/CommentModel';
import {AchievementModel} from './model/AchievementModel';
import {VerificationBadgeModel} from './model/VerificationBadgeModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Account:AccountModel;
  public Comment:CommentModel;
  public Achievement:AchievementModel;
  public VerificationBadge:VerificationBadgeModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Account = new AccountModel();
    this.Comment = new CommentModel();
    this.Achievement = new AchievementModel();
    this.VerificationBadge = new VerificationBadgeModel();
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

    router.get('/account/', (req, res) => {
      console.log("why?");
      this.Account.retrieveAllAccounts(res);
      
  });

    router.post('/account/', (req, res) => {
      const accountId = crypto.randomBytes(16).toString("hex");
      const userId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      jsonObj.accountId = accountId;
      jsonObj.userId = userId
      this.Account.model.create([jsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      res.send('{"Account Id is":"' + accountId + '"}');
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

    // ACHIEVEMENT
    router.get('/achievement/', (req, res) => {
      console.log("Better your achievment worth it!");
      this.Achievement.retrieveAllAchievement(res);
  
    });

    router.post('/achievement/', (req, res) => {
      const achievementId = crypto.randomBytes(16).toString("hex");
      const userId = crypto.randomBytes(16).toString("hex");
      var jsonObj = req.body;
      jsonObj.achievementId = achievementId;
      jsonObj.userId = userId
      this.Achievement.model.create([jsonObj], (err) => {
        if (err) {
          console.log('object creation failed');
        }
      });
      res.send('{"Achievement Id is":"' + achievementId + '"}');
    });

    //VERIFICATION BADGE
    router.get('/verificationBadge/', (req, res) => {
      console.log("Here is your verification badge docs!");
      this.VerificationBadge.retrieveAllVerificationBadge(res);
  
    });


    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};