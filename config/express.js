const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');

var cors = require('cors');
module.exports = function () {
    const app = express();
    const bodyParser = require('body-parser');

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors());

    app.use(bodyParser.json());
    // app.use(express.static(process.cwd() + '/public'));

    /* App (Android, iOS) */
    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/app/Folder/folderRoute')(app);
    // require('../src/app/Board/boardRoute')(app);

    return app;
};