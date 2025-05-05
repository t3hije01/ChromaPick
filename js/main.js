const { app, BrowserWindow, ipcMain, desktopCapturer } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600, // Match the container's max-width
        height: 600, // Adjust height to match the container's content
        frame: false, // Removes the title bar
        resizable: false, // Prevent resizing
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

ipcMain.handle('capture-screen', async () => {
    const sources = await desktopCapturer.getSources({ types: ['screen'] });
    return sources;
})