import { select, selectAll, addClass, removeClass, hasClass } from "./utils/dom"

const revealMenu = () => {

  const menuBtn = select("[data-menu-button]")
  const menuSection = select("[data-menu-section]")
  const bodyEl = select("body")
  const menuClass = "is-revealed"
  const bodyClass = "menu-is-revealed"

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

const hoverImage = () => {

  const menuLinks = selectAll("[data-menu-link]")
  const menuBg = select("[data-menu-bg]")

  menuLinks.forEach((link, index) => {
    
    index = index + 1

    link.addEventListener("mouseover", () => {
      menuBg.style.backgroundImage = `url(/assets/images/menu-${index}.jpg)`
    })

  })

}

const init = () => {
  revealMenu()
  hoverImage()
}
export default init