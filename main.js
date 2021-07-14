const { app, BrowserWindow } = require('electron')
const { url } = require ('./config.json')

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    //frame: false
  })
  win.loadURL(url)
}

app.whenReady().then(() => {
  createWindow()
  app.on('ready', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})