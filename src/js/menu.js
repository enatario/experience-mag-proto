import { select, addClass, removeClass, hasClass } from "./utils/dom"

const menuBtn = select("[data-menu-button]")
const menuSection = select("[data-menu-section]")
const bodyEl = select("body")
const menuClass = "is-revealed"
const bodyClass = "menu-is-revealed"

const revealMenu = () => {

  menuBtn.addEventListener("click", () => {
    const isRevealed = hasClass(menuSection, menuClass)

    if (isRevealed) {
      removeClass(menuSection, menuClass)
      removeClass(bodyEl, bodyClass)
    }
    else {
      addClass(menuSection, menuClass)
      addClass(bodyEl, bodyClass)
    }
  })
}
export default revealMenu