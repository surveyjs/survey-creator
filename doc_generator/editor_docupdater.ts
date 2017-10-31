import * as fs from 'fs';
import * as Github from 'github-api';

require('dotenv').config();

var github = new Github({
  username: process.env.GITUSER,
  password: process.env.GITPASS,
  auth: 'basic'
});

var errorHandler = function(err) {
      if(!err) {
         console.log('Success');
      }
      else {
         console.log(err);
      }
   };

var repository = github.getRepo('surveyjs', 'service');

var classesContent = fs.readFileSync('doc_generator/classes.json', 'utf8');

repository.writeFile(
   'master',
   'surveyjs.io/App_Data/DocsEditor/classes.json',
   classesContent,
   'Updated Editor API documentation',
   errorHandler
).then(function(val) {

   var pmesContent = fs.readFileSync('doc_generator/pmes.json', 'utf8');

   repository.writeFile(
      'master',
      'surveyjs.io/App_Data/DocsEditor/pmes.json',
      pmesContent,
      'Updated Editor API documentation',
      errorHandler
   );

});
