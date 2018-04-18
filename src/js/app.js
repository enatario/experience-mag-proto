import setPathCookie from './utils/setPathCookie.js'
import removeMobileHover from './utils/removeMobileHover.js'

removeMobileHover()
setPathCookie()

// Add class to html if JS is loaded
document.querySelector('html').classList.add('js-is-loaded')

console.log("CWD:" + process.cwd())
console.log("Dirname:" + __dirname)
