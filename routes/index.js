var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  var files = [];
  var names =  [];
const testFolder = 'https://github.com/eman00392/Ethan1/tree/master/public/art/';

fs.readdir(testFolder, (err, filess) => {

for (i = 0; i < filess.length; i++) {
    files.push(filess[i])
    names.push(filess[i].substring(0, filess[i].indexOf('.')));
}
files.shift();
names.shift();
console.log(files);
  res.render('index', { title: 'Westfield Art Gallery', files: files, names: names });

})
});

module.exports = router;
