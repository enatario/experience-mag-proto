import setPathCookie from "./utils/setPathCookie.js"
import removeMobileHover from "./utils/removeMobileHover.js"
import menu from "./menu.js"
import shareQuote from "./shareQuote.js"
import audio from "./audio.js"
import annotations from "./annotations.js"
import playlist from "./playlist"
import picturefill from "picturefill"
import lazysizes from "lazysizes"
import smooth from "smooth-scroll"

// Utils
removeMobileHover()
setPathCookie()

// App
menu()
shareQuote()
audio()
annotations()
playlist()

new smooth('a[href*="#"]')

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded")
