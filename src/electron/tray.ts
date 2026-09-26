import { app, BrowserWindow, Menu, Tray } from 'electron';
import path from 'path';
import { getAssetsPath } from './pathResolver.js';

export const createTray = (mainWindow: BrowserWindow) => {
  const tray = new Tray(
    path.join(
      getAssetsPath(),
      process.platform === 'darwin' ? 'heroIconTemplate.png' : 'hero.png',
    ),
  );

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: 'Show',
        click: () => {
          mainWindow.show();
          if (app.dock) {
            app.dock.show();
          }
        },
      },
      {
        label: 'Quit',
        click: () => app.quit(),
      },
    ]),
  );
};
