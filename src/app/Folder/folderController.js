const jwtMiddleware = require("../../../config/jwtMiddleware");
const folderProvider = require("../../app/Folder/folderProvider");
const folderService = require("../../app/Folder/folderService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

exports.postFolder = async function(req, res) {
  // header, body
  const userId = parseInt(req.headers.user_id);
  const folderName = req.body.folder_name;

  const createFolderResponse = await folderService.createFolder(
    userId,
    folderName
  );

  return res.send(createFolderResponse);
};