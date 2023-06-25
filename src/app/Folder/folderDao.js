async function createFolder(connection, insertFolderInfoParams) {
  const insertFolderInfoQuery = `
    INSERT INTO folders (folder_name, user_id)
    VALUES (?, ?);`;

  const insertFolderInfoRow = await connection.query(
    insertFolderInfoParams
  );

  return insertFolderInfoRow;
}

async function getFolder(connection, selectFolderInfoParams) {
  const selectFolderInfoQuery = `
    SELECT *
    VALUES (?, ?);`;

  const selectFolderInfoRow = await connection.query(
    selectFolderInfoParams
  );

  return insertFolderInfoRow;
}

module.exports = {
  createFolder,
}