import setPathCookie from "./utils/setPathCookie.js"
import removeMobileHover from "./utils/removeMobileHover.js"
import nav from "./nav.js"
import picturefill from "picturefill"
import lazysizes from "lazysizes"

// Utils
removeMobileHover()
setPathCookie()

// App
nav()

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded")
