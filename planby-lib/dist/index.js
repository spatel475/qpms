
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./planby-pro.cjs.production.min.js')
} else {
  module.exports = require('./planby-pro.cjs.development.js')
}
