const { app, BrowserWindow, ipcMain} = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600, // Sama kuin containerin leveys
        height: 600, // Sama kuin containerin korkeus
        frame: false, // Poista ikkuna- ja valikkopalkki
        resizable: false, // Ei salli sovelluksen koon muuttamista
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');

    ipcMain.on('close-app', () => {
        mainWindow.close();
    })
});