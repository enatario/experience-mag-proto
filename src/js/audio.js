import { select, addClass, removeClass } from './utils/dom'
import { Howl } from 'howler'

const audioBtn = select('[data-audio-btn]')
const vol = 0.5

const sound = new Howl({
  src: ['/assets/audio/audio-file.mp3'],
  loop: true,
  volume: vol,
  preload: true,
  html5: true,
  onload: () => {
    audioBtn.removeAttribute('hidden')
  },
  onplay: () => {
    sound.fade(0, vol, 1000)
  }
})

const audioToggle = () => {
  audioBtn.addEventListener('click', () => {
    if (sound.playing()) {
      sound.pause()
      removeClass(audioBtn, 'is-playing')
    }
    else {
      sound.play()
      addClass(audioBtn, 'is-playing')
    }
  })
}

export default audioToggle