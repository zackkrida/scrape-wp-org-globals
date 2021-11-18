# scrape-wp-org-globals

Scrape the WordPress.org global header, footer, and stylesheets.

## Usage

```js
import { scrapeWpDotOrg } from "../index.mjs"

scrapeWpDotOrg().then(([header, footer, css]) => {})
```

## Example

```
cd example
node index.mjs
```

Then observe the written `index.html` file.
