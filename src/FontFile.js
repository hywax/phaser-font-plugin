import Phaser from 'phaser'

export class FontFile extends Phaser.Loader.File {
  constructor(loader, key, url, xhrSettings) {
    const fileConfig = {
      type: 'font',
      key,
      url,
      xhrSettings,
    }

    super(loader, fileConfig)
  }

  load() {
    const font = new FontFace(this.key, `url(${this.url})`)

    font.load().then(() => {
      document.fonts.add(font)

      this.loader.emit(Phaser.Loader.Events.FILE_PROGRESS, this, 1)
      this.loader.nextFile(this, true)
    }).catch(() => {
      this.loader.nextFile(this, false)
    })
  }
}
