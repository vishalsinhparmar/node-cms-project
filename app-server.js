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
// Debug route to check if files exist
app.get('/debug/files', (req, res) => {
  const fs = require('fs')
  const path = require('path')
  const publicDir = path.join(__dirname, 'public')
  
  try {
    const cssFiles = fs.readdirSync(path.join(publicDir, 'css'))
    const jsFiles = fs.readdirSync(path.join(publicDir, 'js'))
    
    res.json({
      publicDir: publicDir,
      cssFiles: cssFiles,
      jsFiles: jsFiles,
      customFixesExists: fs.existsSync(path.join(publicDir, 'css', 'custom-fixes.css')),
      carouselFixExists: fs.existsSync(path.join(publicDir, 'js', 'carousel-fix.js'))
    })
  } catch (error) {
    res.json({ error: error.message, publicDir: publicDir })
  }
})

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
const http = http_module.Server(app)
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})