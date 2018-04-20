import { selectAll, select } from './utils/dom'

const href = window.location.href
const shares = selectAll('[data-share-text]')

const shareQuote = () => {

  if (shares) {
    shares.forEach(share => {
      const shareCopy = share.innerHTML
      const encode = encodeURI(shareCopy)

      const attr = share.getAttribute("data-share-text")
      const tweeter = select(`[data-share-btn=${attr}]`)
      const fullText = `https://twitter.com/intent/tweet?text=${encode}&via=ExperienceMagazine&url=${encodeURI(href)}`

      tweeter.setAttribute("href", fullText)
    })
  }
}

export default shareQuote