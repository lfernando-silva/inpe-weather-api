const Path = require('path')
module.exports = {
    getHandler: name => require(Path.join(__dirname,`${name}Handler.js`))
}