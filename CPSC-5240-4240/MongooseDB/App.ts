import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ListModel} from './model/ListModel';
import {TaskModel} from './model/TaskModel';
import {AccountModel} from './model/AccountModel';
import * as crypto from 'crypto';
import {CommentModel} from './model/CommentModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Lists:ListModel;
  public Tasks:TaskModel;
  public Account:AccountModel;
  public Comment:CommentModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Lists = new ListModel();
    this.Tasks = new TaskModel();
    this.Account = new AccountModel();
    this.Comment= new CommentModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
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



    router.get('/app/listcount', (req, res) => {
      console.log('Query the number of list elements in db');
      this.Lists.retrieveListCount(res);
    });

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

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};