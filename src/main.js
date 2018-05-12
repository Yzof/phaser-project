import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    // What is the difference between the document and the documentElement?
    const docElement = document.documentElement
    // Set the dimensions to either the available width or the games configured width,
    // whichever is larger. We might just want to set this to a fixed size
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    // Pass these values into Phaser.game so that the game can actually be
    // configured
    super( // was originaly super(width, height, Phaser.CANVAS, 'content', null)
      width,
      height,
      Phaser.CANVAS, // 3 options canvas, webgl or auto
      'content', // Don't know
      null // Don't know
    )

    this.state.add('Boot', BootState, false)

    // We are loading in sprites in the splash, this is likely the 'opener'
    this.state.add('Splash', SplashState, false)

    // This is where we are using the sprites
    this.state.add('Game', GameState, false)

    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('Boot')
    }
  }
}

window.game = new Game()

if (window.cordova) {
  var app = {
    initialize: function () {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  }

  app.initialize()
}
