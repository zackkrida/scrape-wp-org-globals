import { scrapeWpDotOrg } from "../index.mjs"
import { writeFile } from "fs/promises"

scrapeWpDotOrg().then(([header, footer, css]) => {
  writeFile(
    "index.html",
    `
<style>${css}</style>
${header}
<div>This is so hacky.</div>
${footer}
  `
  )
})
