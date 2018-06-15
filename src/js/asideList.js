import { select, addClass } from "./utils/dom"

const asideList = select("[data-aside-list]")
const asideBtn = select("[data-btn-aside-list]")

const revealList = () => {
  
  asideBtn.addEventListener("click", () => {
    addClass(asideList, "is-open")
  })
}

export default revealList