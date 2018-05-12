/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import User from '../sprites/User'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    const bannerText = 'Who Even Needs Banner Text'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.user = new User({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'user'
    })

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    // this.game.add.existing(this.mushroom)
    this.game.add.existing(this.user)
  }

  render () {
    // If we are in the developer environment
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
      this.game.debug.spriteInfo(this.user, 32, 32)
    }
  }
}
