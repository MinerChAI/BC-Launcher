const electron = require('electron');
const fs = require('fs');
const {app, BrowserWindow} = electron;

function saveJSON(data){
    fs.writeFile('./config.json', JSON.stringify(data, null, '\t'), (err) => {
        if (err) console.log(err);
    });
};

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            nodeIntegration: true,
            webSecurity: true
        }
    });
    win.loadURL('http://localhost:5000/login?launcher=1');
    exports.win = win;

    function open(filename) {
        win.loadURL(`file://${__dirname}/${filename}`);
    }

    function loggedIn(nickname){
        var data = require('./config.json');
        data.nickname = nickname;
        saveJSON(data);
        if (!win.webPreferences) win.webPreferences = {
            nodeIntegration: true,
        };
        win.webPreferences.webSecurity = false;
        open('index.html');
        win.webPreferences.webSecurity = true;
    }

    exports.open = open;
    exports.loggedIn = loggedIn;
});
exports.saveJSON = saveJSON;
