declare module 'phaser-font-plugin' {
  import Phaser from 'phaser'

  export class FontPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager: Phaser.Plugins.PluginManager)
    fontFileCallback(key: string, url: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject)
  }

  export class FontFile extends Phaser.Loader.File {
    constructor(loader: Phaser.Loader.LoaderPlugin, key: string, url: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject)
    load(): void
  }
}

declare namespace Phaser {
  namespace Loader {
    interface LoaderPlugin {
      font(name: string, path: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this
    }
  }
}
