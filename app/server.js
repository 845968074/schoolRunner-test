import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import bodyParser from 'body-parser';
import User from '../mongoose/user';
import oprate from "../mongoose/query";
const app = express();
const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));
app.use(express.static('./public'));
/*app.post('/login', function (req, res) {
     console.log("aaa");
 let userID = req.body.Id;
 let password = req.body.Password;
 let student=new User({
 ID:userID,
 Password:password
 });
 db.connect();
 let opratetion=new oprate();
 opratetion.Save(student);
  res.send("success");
 });*/

app.listen(3000, function() {
  console.log('Listening on 3000');
});

