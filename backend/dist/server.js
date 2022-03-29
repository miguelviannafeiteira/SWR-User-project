'use strict'; function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } } const _express = require('express'); const _express2 = _interopRequireDefault(_express)
const _cors = require('cors'); const _cors2 = _interopRequireDefault(_cors)
const _routes = require('./routes'); const _routes2 = _interopRequireDefault(_routes)

const _database = require('./database'); const _database2 = _interopRequireDefault(_database)

_database2.default.call(void 0)

const port = 3333
const app = _express2.default.call(void 0)

app.use(_cors2.default.call(void 0))
app.use(_express2.default.json())
app.use(_routes2.default)

app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`)
})
