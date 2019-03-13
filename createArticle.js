const fs = require('fs')
const path = require('path')
const lorem = require('lorem-ipsum-simple').default

function createArticle (title, content, date) {
  const article = {
    id: (createArticle.id++).toString(),
    date,
    title,
    content
  }
  fs.writeFileSync(path.resolve(`src/data/json`, `source-${article.id}.json`), JSON.stringify(article))
}

function generateArticles (n) {
  let i = 0
  while (i < n) {
    const title = lorem(generateRandomNumber(12))
    const content = lorem(generateRandomNumber(200))
    const date = generateAutomaticDate(i)
    createArticle(title, content, date.toJSON())
    i++
  }

  function generateRandomNumber (limit, min = 10) {
    const dif = limit - min
    const random = Math.floor(Math.random() * limit)
    return random + limit
  }

  function generateAutomaticDate (multi) {
    const daySeconds = 1000 * 60 * 60 * 24
    const offsetDay = multi * daySeconds
    return new Date(new Date().valueOf() + offsetDay)
  }
}
if (!createArticle.id) {
  createArticle.id = 0
}
generateArticles(6)
