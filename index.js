const electron = require('electron');
const fs = require('fs');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
    let win = new BrowserWindow({width:800, height:600, webPreferences: {
            nodeIntegration: true
        }});
    win.loadURL(`file://${__dirname}/login.html`);
    exports.win = win;
});
exports.saveJSON = (data) => {
    fs.writeFile('./config.json', JSON.stringify(data, null, '\t'), (err) => {
        if (err) console.log(err);
    });
};
exports.verify = () => {
    return true; // TODO: do request to the site
}
