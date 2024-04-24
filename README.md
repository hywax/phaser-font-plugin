# Phaser Font Plugin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Phaser Font Plugin is a lightweight plugin that allows you to load fonts in your Phaser 3 game.

## 🎯 Features

* 🚀️ Easy to use
* 📦️ Lightweight ~ 600 bytes
* 🌐️ XHRSettings support
* 0️⃣ Zero dependencies
* 🪄️ TypeScript support

## ✨ Installation
```shell
# Using pnpm
pnpm add phaser-font-plugin

# Using yarn
yarn add phaser-font-plugin

# Using npm
npm install phaser-font-plugin
```

## ⚡ Usage

### Load the plugin

Add the plugin to the list of global plugins in your game configuration.

```typescript
import { Game } from 'phaser'
import { FontPlugin } from 'phaser-font-plugin'

export default new Game({
  plugins: {
    global: [
      {
        key: 'FontPlugin',
        plugin: FontPlugin,
        start: true,
      },
    ],
  },
})
```

### Use the plugin

Use the plugin to load fonts in your scenes.

```typescript
import { Scene } from 'phaser'

export default class Boot extends Scene {
  preload() {
    this.load.font('pixeloid', 'assets/fonts/pixeloid.ttf')
  }
}
```

## 🌟 Credits

A huge thank you to everyone who is helping to improve Phaser Font Plugin. Thanks to you, the project can evolve!

### Contributors

To become a contributor, please follow our [contributing guide](.github/CONTRIBUTING.md).

<img src="https://raw.githubusercontent.com/hywax/phaser-font-plugin/main/.github/static/contributors.svg" alt="contributors" width="100%"/>

## 📝 License

Licensed under the [MIT License](./LICENSE.md).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/phaser-font-plugin/latest.svg?logo=hackthebox&color=00bcd4&logoColor=fff
[npm-version-href]: https://npmjs.com/package/phaser-font-plugin
[npm-downloads-src]: https://img.shields.io/npm/dm/phaser-font-plugin.svg?logo=simpleanalytics&colorB=00bcd4&logoColor=fff
[npm-downloads-href]: https://npmjs.com/package/phaser-font-plugin
[license-src]: https://img.shields.io/badge/License-MIT-00bcd4?logo=opensourceinitiative&logoColor=fff
[license-href]: https://npmjs.com/package/phaser-font-plugin

