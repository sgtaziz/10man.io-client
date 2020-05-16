const os = require('os')
const builder = require('electron-builder')

const Platform = builder.Platform
const { name, productName } = require('../package.json')

let targets
var platform = os.platform()

if (platform == 'darwin') {
  targets = Platform.MAC.createTarget()
} else if (platform == 'win32') {
  targets = Platform.WINDOWS.createTarget()
} else if (platform == 'linux') {
  targets = Platform.LINUX.createTarget()
}

const config = {
  appId: `com.sgtaziz.${name}`,
  copyright: 'Copyright ©2020 sgtaziz013@gmail.com',
  // asar: false,
  // compression: 'store',
  productName,
  directories: {
    output: './build/',
  },
  files: ['_icons/icon.*', './dist/**/*', '!./dist/web/**/*'],
  dmg: {
    contents: [
      {
        path: '/Applications',
        type: 'link',
        x: 410,
        y: 230,
      },
      {
        type: 'file',
        x: 130,
        y: 230,
      },
    ],
    window: {
      height: 380,
      width: 540,
    },
  },
  linux: {
    icon: '_icons/icon.png',
    target: ['deb', 'snap', 'AppImage'],
  },
  mac: {
    category: 'public.app-category.utilities',
    icon: '_icons/icon.icns',
    target: ['dmg', 'zip'],
    type: 'distribution',
  },
  win: {
    icon: '_icons/icon.ico',
    target: ['nsis', 'zip'],
    publisherName: 'sgtaziz',
  },
  nsis: {
    allowToChangeInstallationDirectory: true,
    oneClick: false,
  },
  squirrelWindows: {
    iconUrl: 'https://raw.githubusercontent.com/sgtaziz/10man.io-client/master/_icons/icon.ico',
    remoteReleases: true,
  },
}

builder
  .build({
    targets,
    config,
  })
  .then((m) => {
    console.log(m)
  })
  .catch((e) => {
    console.error(e)
  })
