const http = require('http')
const handler = function (req, res) {
  res.end(`Hi. I am the development server working. Time on my end is ${new Date}`)
}
const server = http.createServer(handler)

const port = process.env.NODE_ENV || 3000

server.listen(port, () => {
  console.log(`Application running on port ${port}`)
})
