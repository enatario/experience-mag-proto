import { select, selectAll, addClass, removeClass, hasClass } from "./utils/dom"

const body = select("body")
const pageId = body.getAttribute("data-page-type")
const playlistNav = select("[data-playlist-nav]")
const plBtns = selectAll("[data-article-toggle-btn]")
const showAllBtn = select("[data-article-toggle-all]")
const navIsHidden = playlistNav.hasAttribute("hidden")
const articles = selectAll("[data-article-toggle-content]")



const revealArticle = () => {

  plBtns.forEach(btn => {
    const id = btn.getAttribute("data-article-toggle-btn")
    const article = select(`[data-article-toggle-content=${id}]`)

    btn.addEventListener("click", () => {
      article.removeAttribute("hidden")
      addClass(btn, "is-hidden")

      if (navIsHidden) {
        playlistNav.removeAttribute("hidden")
      }
    })
  })
}

const collapseAll = () => {
  showAllBtn.addEventListener("click", () => {

    playlistNav.setAttribute("hidden", "")

    articles.forEach(article => {
      const id = article.getAttribute("data-article-toggle-content")
      const btn = select(`[data-article-toggle-btn=${id}]`)

      if (!article.hasAttribute("hidden")) {
        article.setAttribute("hidden", "")
        removeClass(btn, "is-hidden")
      }

    })
  })
}

const init = () => {

  if (pageId == "playlist") {
    revealArticle()
    collapseAll()
  }
}

export default init