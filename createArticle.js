const fs = require('fs')
const path = require('path')
const lorem = require('lorem-ipsum-simple').default

function createArticle (title, content, date, img) {
  const article = {
    id: (createArticle.id++).toString(),
    date,
    title,
    content,
    img
  }
  fs.writeFileSync(path.resolve(`src/data/json`, `source-${article.id}.json`), JSON.stringify(article, undefined, 3))
}
function createMD (title, content, date, img) {
  const id = createMD.id++
  const MD = `---\nid: ${id}\ndate: ${date}\n---\n#${title}\n ${content}\n${img}`
  fs.writeFileSync(path.resolve(`src/data/md`, `source-${id}.md`), MD)
}
function generateData (n) {
  if (!createArticle.id && !createMD.id) {
    createArticle.id = 0
    createMD.id = 0
  }
  let i = 0
  while (i < n) {
    const title = lorem(generateRandomNumber(12))
    const content = lorem(generateRandomNumber(200))
    const date = generateAutomaticDate(i)
    const cities = ['Tokio', 'Osaka', 'Kuala Lumpur', 'Singapur', 'Hong Kong', 'Vietnam', 'Nueva Deli']
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const img = `<img src="https://loremflickr.com/600/400/${randomCity}" />`
    createArticle(title, content, date.toJSON(), img)
    createMD(title, content, date.toJSON(), img)
    i++
  }

  function generateRandomNumber (limit, min = 10) {
    const random = Math.floor(Math.random() * limit)
    return random + limit
  }

  function generateAutomaticDate () {
    const last90RandomDay = Math.round((90 * 24 * 60 * 60 * 1000) * Math.random())

    return new Date(new Date() - last90RandomDay)
  }
}

generateData(6)
