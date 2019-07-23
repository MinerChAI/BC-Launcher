const { Client, Authenticator } = require('minecraft-launcher-core');
const data = require('./config.json');
const $ = require('jQuery');

$('.server').onclick = () => {
    var mainURL = `http://example.org/servers/servername/`;
    $('.server-description').append()
}

document.getElementById('play').onclick = () => {
    const launcher = new Client();
    launcher.launch({
        authorization: Authenticator.getAuth(data.nickname),
        root: data.root ? data.root : './minecraft',
        version: {
            number: "1.12.2",
            type: "release"
        },
        memory: {
            min: 0,
            max: 4096
        }
    });

    function log(msg, level){
        $('.logs').append(`<p class="${level}">${msg}</p>`);
    }

    launcher.on('debug', (e) => {
        console.debug(e);
        // log(e, 'debug');
    });
    launcher.on('data', (e) => {
        console.info(e.toString('utf-8'));
        // log(e, 'data');
    });
    launcher.on('error', (e) => {
        console.error(e.toString('utf-8'));
        // log(e, 'error');
    });
};