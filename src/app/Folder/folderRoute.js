module.exports = function(app){
  const folder = require('./folderController');

  // 0. 테스트 API
  app.get('/app/test', folder.getTest)

  // 2-1. 폴더 생성: POST
  app.post('/app/folder/create', folder.postFolder);

  // 2-2. 폴더 전체 조회: GET
  app.get('/app/folder', folder.getFolder);

  // 2-3. 폴더명 수정: PATCH
  app.patch('/app/folder/edit', folder.updateFolder);

  // 2-4. 폴더 삭제: DELETE
  app.delete('/app/folder/delete/:folder_id', folder.deleteFolder);

  // 3-1 기록 전체 조회

  // 3-2. 기록 작성: POST
  app.post('/app/record/create', record.postRecord);

  // 3-3. 기록 id로 내용 조회: GET
  app.get('/app/record/:record_id', record.getRecord);

  // 3-4. 기록 폴더 이동: PATCH
  app.patch('/app/record/move', record.moveFolder);

  // 3-5. 기록 삭제: DELETE
  app.delete('/app/record/delete/:record_id', record.deleteRecord);
};