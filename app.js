// Electron app requires
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let appWindow;// the window that will host the angular app

function initWindow() {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    /* Fullscreen mode
    appWindow = new BrowserWindow({
        fullscreen: true
    })
    */

    // Building the electron build path
    appWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, '/dist/index.html'),
            protocol: "file:",
            slashes: true
        })
    );

    // Initializing the DevTools
    appWindow.webContents.openDevTools();

    appWindow.on('closed', function () {
        appWindow = null;
    });

}
    


// Registering Electron listeners
//  > they initialize the Electron app
app.on('ready', initWindow);
app.on('activate', function () {
    if (win === null) {
        initWindow();
    }
});
