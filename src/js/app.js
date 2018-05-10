import setPathCookie from "./utils/setPathCookie.js"
import removeMobileHover from "./utils/removeMobileHover.js"
import menu from "./menu.js"
import shareQuote from "./shareQuote.js"
import audio from "./audio.js"
import annotations from "./annotations.js"
import picturefill from "picturefill"
import lazysizes from "lazysizes"

// Utils
removeMobileHover()
setPathCookie()

// App
menu()
shareQuote()
audio()
annotations()

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded")
