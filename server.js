var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
var port = 8080//process.env.PORT || 5000

app.listen(port)
console.log('server started on port ' + port)

// to test
// npm run build
// then:
// node server.js
