// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/dev-404-page.js")),
  "component---src-pages-destinations-js": preferDefault(require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/src/pages/destinations.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/layout-index.json"),
  "destinations.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/destinations.json"),
  "layout-index.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/layout-index.json"),
  "index.json": require("/Users/reinoptland/Code/personal/learning-to-code-amsterdam/ltca-site/.cache/json/index.json")
}