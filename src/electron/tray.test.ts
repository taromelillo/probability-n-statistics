import { expect, Mock, test, vi } from 'vitest';
import { createTray } from './tray.js';
import { BrowserWindow, Menu, Tray, app } from 'electron';

vi.mock('electron', () => {
  return {
    Tray: vi.fn().mockImplementation(
      class {
        setContextMenu = () => vi.fn();
      } as any,
    ),
    app: {
      getAppPath: vi.fn().mockReturnValue('/'),
    },
    Menu: {
      buildFromTemplate: vi.fn(),
    },
  };
});

const mainWindow = {
  show: vi.fn(),
} satisfies Partial<BrowserWindow> as any as BrowserWindow;

test('', () => {
  createTray(mainWindow);
  expect(Menu.buildFromTemplate).toHaveBeenCalled();
});
