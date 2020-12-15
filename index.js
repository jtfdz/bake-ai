const { app, BrowserWindow } = require('electron');
const path = require('path');
//const Store = require('electron-store');


// const kanaBodyPura = {
//   vocales: true,  k: false,   s: false,   t: false,  n: false,
//   h: false,  m: false,  y: false,  r: false,  especiales: false
// }

// const kanaBodyImpura = {
//   g: false,  z: false,   d: false,   b: false,  p: false,
// }

// const kanaBodyCompuesta = {
//   ky: false,  sh: false,   ch: false,   ny: false,  hy: false,
//   my: false,  ry: false,   gy: false,   j: false,  by: false,  py: false,
// }


// const schema = {
//   usuario: {
//     type: 'object',
//     default: {gusto: "", nombre: "", iniciado: ""}
//   },
//   //aquí cuando la miércoles de teoría la defina XD
//   teoria: {
//     type: 'object',
//     default: {}
//   },


//   progreso: {
//     type: 'object',
//     default: {
//       hiragana: {
//         pura: kanaBodyPura ,
//         impura: kanaBodyImpura ,
//         compuesta: kanaBodyCompuesta 
//       },
//       katakana: {
//         pura: kanaBodyPura ,
//         impura: kanaBodyImpura ,
//         compuesta: kanaBodyCompuesta 
//       },
//       kanji: {
//         n5: false, n4: false, n3: false, n2: false, n1: false
//       }
//     }
//   },


  
// };




// const store = new Store({schema});




const createWindow = () => {
  // Create the browser window.
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().size;
  const mainWindow = new BrowserWindow({
    width: width, 
    height: height,
    icon: require('path').join('src/assets/media/catlogo-cut.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  });

  // and load the index.html of the app.
  //mainWindow.loadFile(path.join(__dirname, '/dist/index.html'));

  mainWindow.loadURL('http://localhost:4200'); //diferente

  mainWindow.removeMenu()

  // Open the DevTools.
  mainWindow.webContents.openDevTools({mode: 'undocked'});
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.




//require('electron-reload')(__dirname + '/src/app');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
//   app.quit();
// }


// try {
//   require('electron-reloader')(module)
// } catch (_) {}
