path = require("path")
config = require("./webpack.base")()

config.entry = {
	perf: path.join(__dirname, "../app"),
}

module.exports = config
