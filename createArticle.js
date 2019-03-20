const fs = require('fs')
const path = require('path')
const lorem = require('lorem-ipsum-simple').default

function createMD (id, title, content, date, img) {
  const MD = `---
id: ${id}
date: ${date}
---
#${title}
${content}


<div class="img-wrapper">
    ${img}
</div>`
  fs.writeFileSync(path.resolve(`src/data/md`, `source-${id}.md`), MD)
}
function generateData (n) {
  let i = 0
  while (i < n) {
    const title = lorem(generateRandomNumber(12))
    const content = lorem(generateRandomNumber(200))
    const date = generateAutomaticDate(i)
    const cities = ['Tokio', 'Osaka', 'Kuala Lumpur', 'Singapur', 'Hong Kong', 'Vietnam', 'Nueva Deli']
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const img = `<img src="https://loremflickr.com/600/400/${randomCity}" />`
    createMD(i.toString(), title, content, date.toJSON(), img)

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

generateData(16)
