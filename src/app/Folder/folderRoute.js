module.exports = function(app){
  const folder = require('./folderController');

  // 2-1. 폴더 생성: POST
  app.post('/folder/create', folder.postFolder);
};