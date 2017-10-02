require('should')

var NgrockWebpackPlugin = require('../lib/ngrock-webpack-plugin')

describe('ngrock-webpack-plugin', function () {

    it('should pass port option', function () {
        var plugin = new NgrockWebpackPlugin({port: 8888})
        plugin.options.port.should.be.equal(8888)
    })

    it('should connect to ngrock', function (done) {
        this.timeout(5000)

        var plugin = new NgrockWebpackPlugin({port: 8888})
        var compiler = {
            options: {
                devServer: {}
            },
            plugin: function (eventname, callback) {
                var checker = function () {
                    return setTimeout(function () {
                        if (plugin.ngrock.connected) {
                            return done()
                        }
                        checker()
                    }, 100)
                }

                checker()
            }
        }

        plugin.apply(compiler)
    })
})
