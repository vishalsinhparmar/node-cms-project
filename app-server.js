// app-server.js
import express from 'express'
import hogan from 'hogan-express'
import http_module from 'http'
import bodyParser from 'body-parser'
import compression from 'compression'
import _ from 'lodash'
import config from './config'
import Cosmic from 'cosmicjs'

// Use mock data if USE_MOCK_DATA is true or in development
let bucket
if (config.USE_MOCK_DATA || process.env.NODE_ENV === 'development') {
  console.log('🔧 Using mock data for development/demo')
  bucket = require('./helpers/mock-data')
} else {
  console.log('🌐 Connecting to Cosmic CMS')
  const api = Cosmic()
  bucket = api.bucket({
    slug: config.COSMIC_BUCKET,
    read_key: config.COSMIC_READ_KEY,
    write_key: config.COSMIC_WRITE_KEY
  })
}
const app = express()

app.use(bodyParser.json())
app.use(compression())
app.engine('html', hogan)
app.set('views', __dirname + '/views')
app.set('port', process.env.PORT || 3000)

// Configure static file serving with proper MIME types
app.use(express.static(__dirname + '/public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css')
    }
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript')
    }
  }
}))
app.use((req, res, next) => {
  if (req.url === '/favicon.ico')
    return res.end()
  // Set global variables
  res.locals.year = new Date().getFullYear()
  // Set dev
  if (process.env.NODE_ENV === 'development')
    res.locals.is_dev = true
  next()
})
const partials = {
  header: 'partials/header',
  footer: 'partials/footer'
}
require('./routes')(app, config, bucket, partials, _)
const http = http_module.Server(app)
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})