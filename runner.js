const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdiZTI3MjBkLTAyMjEtNDJlMy1hODBhLTE4OTRkODI4NDlmYi0xNjk5NDEwMTU0MTY1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDVlOWEyYzAtZjgyYi00YzAzLTgxNWEtOGRmOTM4ZWVhZmQ4IiwidHlwZSI6InQifQ._qweZcrCVngStH4ic6R004xqh1g9AEzfUw118wK66d4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
