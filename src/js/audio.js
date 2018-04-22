import { selectAll, addClass, removeClass } from "./utils/dom"
import { Howl } from "howler"

const audioBtns = selectAll("[data-audio-btn]")
const vol = 0.5

const audioSelect = () => {
  audioBtns.forEach(button => {
    const audioSrc = button.getAttribute("data-audio-btn")
    
    const audio = new Howl({
      src: [audioSrc],
      loop: true,
      volume: vol,
      preload: true,
      html5: true,
      onload: () => {
        button.removeAttribute("hidden")
      },
      onplay: () => {
        audio.fade(0, vol, 1000)
      }
    })

    button.addEventListener("click", () => {
      if (audio.playing()) {
        audio.pause()
        removeClass(button, "is-playing")
      }
      else {
        audio.play()
        addClass(button, "is-playing")
      }
    })
  })
}

const audioPlay = () => {
  if (audioBtns) {
    audioSelect()
  }
}

export default audioPlay