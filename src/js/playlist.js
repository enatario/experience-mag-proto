import { select, selectAll, addClass, removeClass, hasClass } from "./utils/dom"

const body = select("body")
const pageId = body.getAttribute("data-page-type")
const playlistNav = select("[data-playlist-nav]")
const playlistList = select("[data-playlist-list]")
const plBtns = selectAll("[data-article-toggle-btn]")
const showAllBtn = select("[data-article-toggle-all]")

const createPlaylistNav = () => {

  const headlines = selectAll("[data-article-hed]")

  headlines.forEach((hed, index) => {
    const article = hed.closest("article")
    const hedText = hed.innerHTML
    const slug = hedText
                    .replace(/\s+/g, "-")
                    .replace(/\./g,"")
                    .replace(/\’/g,"")
                    .replace(/\!/g,"")
                    .toLowerCase()

    article.setAttribute("id", slug)
    index = index + 1

    const playlistInner =
      `<li class="playlist-nav__item">
        <p class="playlist-nav__overline">Story ${index}</p>
        <a class="playlist-nav__link" href="#${slug}">${hedText}</a>
      </li>`

    return playlistList.innerHTML += playlistInner
  })
}

const revealArticle = () => {
  plBtns.forEach(btn => {
    const id = btn.getAttribute("data-article-toggle-btn")
    const article = select(`[data-article-toggle-content=${id}]`)

    btn.addEventListener("click", () => {
      article.removeAttribute("hidden")
      addClass(btn, "is-hidden")
    })
  })
}

const revealAll = () => {
  showAllBtn.addEventListener("click", () => {
    const allArticlesCollapsed = hasClass(showAllBtn, "playlist-is-collapsed")

    if (allArticlesCollapsed) {
      removeClass(showAllBtn, "playlist-is-collapsed")
      showAllBtn.innerHTML = "Collapse all stories"

      const articles = selectAll("[data-article-toggle-content]")
      articles.forEach(article => {
        article.removeAttribute("hidden")
      })

      plBtns.forEach(btn => {
        addClass(btn, "is-hidden")
      })
    }

    else {
      addClass(showAllBtn, "playlist-is-collapsed")
      showAllBtn.innerHTML = "Show all stories"

      const articles = selectAll("[data-article-toggle-content]")
      articles.forEach(article => {
        article.setAttribute("hidden", "")
      })

      plBtns.forEach(btn => {
        removeClass(btn, "is-hidden")
      })
    }
  })
}

const init = () => {

  if (pageId == "playlist") {

    createPlaylistNav()
    revealArticle()
    revealAll()
  }
}

export default init