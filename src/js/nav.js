import { select, addClass, removeClass, hasClass } from "./utils/dom"

const navBtn = select("[data-nav-button]")
const navList = select("[data-nav-list]")
const navClass = "is-revealed"

const revealNav = () => {

  navBtn.addEventListener("click", () => {
    const isRevealed = hasClass(navList, navClass)

    if (isRevealed) removeClass(navList, navClass)
    else addClass(navList, navClass)
  })
}
export default revealNav