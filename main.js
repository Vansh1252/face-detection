const { app, BrowserWindow } = require('electron');

function createWindows (){
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile('index.html');
}

app.whenReady().then(createWindows);