import Phaser from 'phaser'
// Asset class
export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    // Simply locks it into the center of the screen
    this.anchor.setTo(0.5)
  }

  update () {
    // This creates the rotational effect
    this.angle += 1
  }
}
