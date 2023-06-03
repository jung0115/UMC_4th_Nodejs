async function createFolder(connection, insertFolderInfoParams) {
  const insertFolderInfoQuery = `
    INSERT INTO folders (folder_name, user_id)
    VALUES (?, ?);`;

  const insertFolderInfoRow = await connection.query(
    insertFolderInfoQuery,
    insertFolderInfoParams
  );

  return insertFolderInfoRow;
}

module.exports = {
  createFolder,
}