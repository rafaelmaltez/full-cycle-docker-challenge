const express = require('express');
const connection = require('./connection');
const names = require('./names')

const app = express()
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const randomName = names[Math.round(Math.random() * names.length -1)];

  await connection.execute('INSERT INTO people(name) VALUES(?)', [randomName]);

  const [insertedNames] = await connection.execute('SELECT name FROM people');

  let htmlString = '<h1>Full Cycle Rocks!</h1><ol>'

  insertedNames.forEach((item) => {
    htmlString += `<li>${item.name}</li>`
  })

  htmlString += '</ol>'

  res.send(htmlString);
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))