const { Client, Authenticator } = require('minecraft-launcher-core');
const data = require('./config.json');
const $ = require('jQuery')

document.getElementById('play').onclick = () => {
    const launcher = new Client();
    launcher.launch({
        authorization: Authenticator.getAuth(data.nickname),
        root: data.root ? data.root : './minecraft',
        version: {
            number: "1.12.2",
            type: "release"
        },
        server: {
            host: "firemc.ru"
        }
    });

    function log(msg, level){
        $('.logs').append(`<p class="${level}">${msg}</p>`);
    }

    launcher.on('debug', (e) => {
        console.log(e);
        log(e, 'debug');
    });
    launcher.on('data', (e) => {
        console.log(e.toString('utf-8'));
        log(e, 'data');
    });
    launcher.on('error', (e) => {
        console.log(e.toString('utf-8'));
        log(e, 'error');
    });
};