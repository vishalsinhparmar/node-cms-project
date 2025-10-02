// config/development.js
module.exports = {
  COSMIC_BUCKET: process.env.COSMIC_BUCKET || 'dev-mock-bucket',
  COSMIC_READ_KEY: process.env.COSMIC_READ_KEY || 'mock-read-key',
  COSMIC_WRITE_KEY: process.env.COSMIC_WRITE_KEY || 'mock-write-key',
  SENDGRID_FUNCTION_ENDPOINT: process.env.SENDGRID_FUNCTION_ENDPOINT || 'https://example.com/sendgrid',
  USE_MOCK_DATA: process.env.USE_MOCK_DATA !== 'false' // Use mock data by default in development
}
