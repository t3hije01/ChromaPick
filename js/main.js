const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600, // Match the container's max-width
        height: 400, // Adjust height to match the container's content
        frame: false, // Removes the title bar
        resizable: true, // Prevent resizing
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html'); // Load your HTML file

    ipcMain.on('close-app', () => {
        mainWindow.close();
    })
});