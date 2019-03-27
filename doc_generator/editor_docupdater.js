var fs = require('fs');
var Github = require('github-api');

require('dotenv').config();

var github = new Github({
  username: process.env.GIT_USER,
  password: process.env.GIT_PASS,
  auth: 'basic'
});

var repository = github.getRepo('surveyjs', 'service');

function commit(inputPath, outputPath, comment) {
   var content = fs.readFileSync(inputPath, 'utf8');
   repository.writeFile(
      'master',
      outputPath,
      content,
      comment,
      function(err) {
         let log = 'inputPath=' + inputPath +
            ', outputPath=' + outputPath + ', comment=' + comment;
         if (!err) {
            console.log('Success: ' + log);
         }
         else{ 
            console.log('Failure: ' + log);
         }
      }
   );
}

commit('doc_generator/classes.json','surveyjs.io/App_Data/DocsEditor/classes.json', 'Updated Editor Classes API documentation');
commit('doc_generator/pmes.json','surveyjs.io/App_Data/DocsEditor/pmes.json', 'Updated Editor Properties API documentation');
commit('docs/sidebar.json', 'surveyjs.io/App_Data/DocsEditor/sidebar.json', 'Updated SideBar');
