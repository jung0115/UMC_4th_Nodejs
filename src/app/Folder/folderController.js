const jwtMiddleware = require("../../../config/jwtMiddleware");
const folderProvider = require("../../app/Folder/folderProvider");
const folderService = require("../../app/Folder/folderService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

exports.getTest = async function (req, res) {
  return res.send(response(baseResponse.SUCCESS))
}

// 폴더 생성
exports.postFolder = async function(req, res) {
  // header, body
  const userId = parseInt(req.headers.user_id);
  const folderName = req.body.folder_name;

  // 폴더명 글자수 2~10자가 아닌 경우
  if(folderName.length < 2 || folderName.length > 10) {
    return res.status(400).json({message : "폴더명은 2~10자로 입력해주세요."});
  }

  else {
    const createFolderResponse = await folderService.createFolder(
      userId,
      folderName
    );

    return res.send(createFolderResponse);
  }
};

// 폴더 전체 조회
exports.getFolder = async function(req, res) {
  // header
  const userId = parseInt(req.headers.user_id);

  const getFolderResponse = await folderService.getFolder(
    userId
  );

  return res.send(getFolderResponse);
};

// 폴더 삭제
exports.deleteFolder = async function(req, res) {
  // header, path
  const userId = parseInt(req.headers.user_id);
  const folderId = parseInt(req.params.folder_id);

  const deleteFolderResponse = await folderService.deleteFolder(
    userId,
    folderId
  );

  return res.send(deleteFolderResponse);
};

// 폴더명 변경
exports.updateFolder = async function(req, res) {
  // header, query, body
  const userId = parseInt(req.headers.user_id);
  const folderId = parseInt(req.query.folder_id);
  const folderName = req.body.folder_name;

  const updateFolderResponse = await folderService.updateFolder(
    userId,
    folderId,
    folderName
  );

  return res.send(updateFolderResponse);
};