import Phaser from 'phaser'
import { FontFile } from './FontFile'

export class FontPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager)

    pluginManager.registerFileType('font', this.fontFileCallback)
  }

  fontFileCallback(key, url, xhrSettings) {
    this.addFile(new FontFile(this, key, url, xhrSettings))
  }
}
