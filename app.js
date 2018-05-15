const http = require('http')
const handler = function (req, res) {
  res.end(`Hi. I am the development server working. Time on my end is ${new Date}`)
}
const server = http.createServer(handler)

server.listen(3000, () => {
  console.log(`Application running on port 3000`)
})
