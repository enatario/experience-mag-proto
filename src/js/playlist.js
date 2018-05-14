import { select, selectAll } from './utils/dom'
import inView from "in-view"

const body = select("body")
const playlistNav = select("[data-playlist-nav]")
const playlistList = select("[data-playlist-list]")

const playlist = () => {

  const pageId = body.getAttribute("data-page-type")

  if (pageId == "playlist") {

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

  const playlistIsHidden = playlistNav.hasAttribute("hidden")

  inView("[data-article-content]")
    .on("enter", () => {
      if (playlistIsHidden) {
        playlistNav.removeAttribute("hidden")
      }
    })

  inView("[data-site-footer]")
    .on("enter", () => {
      if (!playlistIsHidden) {
        playlistNav.setAttribute("hidden", "")
      }
    })
}

export default playlist