import { select, selectAll, hasClass, removeClass, addClass } from './utils/dom'

const annoBtns = selectAll("[data-anno-btn]")

const toggleAnno = () => {
  annoBtns.forEach(anno => {

    const citeCopy = anno.nextElementSibling
    const citeSiblingInDOM = hasClass(citeCopy, "article-content__anno-copy")

    if (citeSiblingInDOM) {
      anno.addEventListener("click", () => { 
        const citeIsOpen = hasClass(citeCopy, "is-open")

        if (citeIsOpen) removeClass(citeCopy, "is-open")
        else addClass(citeCopy, "is-open")
      })
    }
  })
}

const findAnno = () => {
  if (annoBtns && window.matchMedia("(max-width: 55em)").matches) {
    toggleAnno()
  }
}

export default findAnno