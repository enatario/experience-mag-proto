import { select, selectAll, hasClass, removeClass, addClass } from './utils/dom'

const plBtns = selectAll("[data-article-toggle-btn]")

const revealArticle = () => {

  if (plBtns) {

    plBtns.forEach(btn => {
      const id = btn.getAttribute("data-article-toggle-btn")
      const article = select(`[data-article-toggle-content=${id}]`)

      btn.addEventListener("click", () => {
        const isHidden = article.hasAttribute("hidden")

        if (!isHidden) {
          article.setAttribute("hidden", "")
          btn.innerHTML = "Read more"
        }

        else {
          article.removeAttribute("hidden")
          btn.innerHTML = "Collapse story"
        }
      })

    })
  }
}

export default revealArticle