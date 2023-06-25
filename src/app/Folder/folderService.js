const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const folderProvider = require("./folderProvider");
const folderDao = require("./folderDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");

exports.createFolder = async function(userId, folderName) {
  try {
    console.log(userId);
    const insertFolderInfoParams = [userId, folderName];

    const connection = await pool.getConnection(async (conn) => conn);
    const createFolderResult = await folderDao.createFolder(connection, insertFolderInfoParams);
    connection.release();

    return response(baseResponse.SUCCESS);

  } catch (err) {
    logger.error(`App - createFolder Service error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
}

exports.getFolder = async function(userId, folderName) {
  try {
    console.log(userId);
    const selectFolderInfoParams = [userId, folderName];

    const connection = await pool.getConnection(async (conn) => conn);
    const getFolderResult = await folderDao.getFolder(connection, selectFolderInfoParams);
    connection.release();

    return response(baseResponse.SUCCESS);

  } catch (err) {
    logger.error(`App - getFolder Service error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
}