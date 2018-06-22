import { select, addClass } from "./utils/dom"

const asideList = select("[data-aside-list]")
const asideBtn = select("[data-btn-aside-list]")

const revealList = () => {
  
  if (asideBtn) {
    asideBtn.addEventListener("click", () => {
      addClass(asideList, "is-open")
    })
  }
}

export default revealList