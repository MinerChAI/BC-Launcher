var remote = require('electron').remote;
var {saveJSON, verify} = remote.require('./index.js');
var data = require('./config.json');

document.getElementById('loginButton').onclick = () => {
    data['auth'] = {
        'login': document.getElementById('login').value,
        'password': document.getElementById('password').value
    };
    saveJSON(data);
    if (verify()) {
        remote.getCurrentWindow().loadURL(`file://${__dirname}/index.html`)
    }
};